use marketPulse;
show tables;


select * from assets where market like 'ibex35';

ALTER TABLE asset_prices
DROP COLUMN open_price,
DROP COLUMN high_price,
DROP COLUMN low_price,
DROP COLUMN close_price,
DROP COLUMN volume,
DROP COLUMN change_percent,
DROP COLUMN last_updated;

ALTER TABLE asset_prices DROP COLUMN timestamp;

ALTER TABLE asset_prices
ADD COLUMN timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE asset_prices
MODIFY COLUMN id INT AUTO_INCREMENT;

ALTER TABLE assets
DROP COLUMN api_symbol;




ALTER TABLE assets
ADD COLUMN market VARCHAR(50) NOT NULL DEFAULT 'GLOBAL' AFTER region;





show tables from marketPulse;
use marketPulse;
desc assets;

desc asset_prices;

ALTER TABLE assets
ADD COLUMN price DECIMAL(15,4) NULL AFTER currency,
ADD COLUMN changePercent DECIMAL(10,4) NULL AFTER price,
ADD COLUMN updatedAt TIMESTAMP NULL AFTER changePercent;

use marketPulse;

desc assets;