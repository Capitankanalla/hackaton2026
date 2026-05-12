-- =========================================================
-- MARKETPULSE DATABASE SCHEMA
-- Plataforma de simulació de mercats financers en temps real
-- NO trading real - només simulació educativa
-- =========================================================
-- 📌 -- marketPulse: esquema de la plataforma de simulació de mercats financers en temps real
CREATE DATABASE IF NOT EXISTS marketPulse;
USE marketPulse;

-- 1️⃣ USERS —emmagatzema els usuaris registrats de la plataforma 
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2️⃣ ASSETS — catàleg d’actius financers disponibles 
CREATE TABLE assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(20) NOT NULL UNIQUE,     -- Ticker que mostrarem al frontend
    api_symbol VARCHAR(50) NOT NULL,        -- Ticker real de Finnhub
    name VARCHAR(100),
    type ENUM('stock','crypto','forex','index','commodity') NOT NULL,
    exchange VARCHAR(50),
    currency VARCHAR(10),
    region ENUM('US','EU','ASIA','GLOBAL') DEFAULT 'GLOBAL',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_symbol ON assets(symbol);

-- 3️⃣ ASSET PRICES — històric de preus dels actius en format temporal 

CREATE TABLE asset_prices (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    asset_id INT NOT NULL,
    timestamp BIGINT NOT NULL,              -- UNIX time de Finnhub
    price DECIMAL(18,8) NOT NULL,
    open_price DECIMAL(18,8),
    high_price DECIMAL(18,8),
    low_price DECIMAL(18,8),
    close_price DECIMAL(18,8),
    volume DECIMAL(20,2),
    change_percent DECIMAL(8,2),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE,
    INDEX idx_asset_time (asset_id, timestamp)
);

-- 4️⃣ WATCHLISTS — Llistes de seguiment personalitzades per l’usuari
CREATE TABLE watchlists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 5️⃣ WATCHLIST_ASSETS — Relació entre watchlists i actius (N:N)
CREATE TABLE watchlist_assets (
    watchlist_id INT NOT NULL,
    asset_id INT NOT NULL,
    PRIMARY KEY (watchlist_id, asset_id),
    FOREIGN KEY (watchlist_id) REFERENCES watchlists(id) ON DELETE CASCADE,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
);

-- 6️⃣ ALERTS — Alertes de preu configurades per l'usuari
CREATE TABLE alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    asset_id INT NOT NULL,
    condition_type ENUM('above','below') NOT NULL,
    target_price DECIMAL(18,8) NOT NULL,
    triggered BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
);

-- 7️⃣ PORTFOLIOS — Cartera virtual simulada per cada usuari
CREATE TABLE portfolios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    balance DECIMAL(18,2) DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_portfolio ON portfolios(user_id);

-- 8️⃣ POSITIONS — Posicions obertes dels usuaris amb dades de preus, temps, etc.
CREATE TABLE positions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    portfolio_id INT NOT NULL,
    asset_id INT NOT NULL,
    quantity DECIMAL(18,8) NOT NULL,
    average_price DECIMAL(18,8) NOT NULL,
    FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
);

-- 9️⃣ SIMULATED ORDERS — Historial complert d’ordres simulades
CREATE TABLE simulated_orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    portfolio_id INT NOT NULL,
    asset_id INT NOT NULL,
    order_type ENUM('buy','sell') NOT NULL,
    quantity DECIMAL(18,8) NOT NULL,
    price DECIMAL(18,8) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
);
