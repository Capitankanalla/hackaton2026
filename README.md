# hackaton-CIFOLaVioleta-18-05-2026

# MarketPulse

Plataforma web de simulació i visualització de mercats financers en temps real desenvolupada per a un hackató.

MarketPulse permet monitoritzar diferents mercats financers, crear simulacions d’inversió i predicció, configurar alertes personalitzades i visualitzar dades en temps real des d’un dashboard interactiu.

---

# Descripció del projecte

L’objectiu del projecte és crear una aplicació web híbrida capaç de:

- Visualitzar dades financeres en temps real
- Simular inversions sense diners reals
- Monitoritzar criptomonedes, accions, índexs i mercats predictius
- Configurar alertes i notificacions
- Gestionar watchlists i dashboards personalitzats

La plataforma NO permet trading real. Tot el sistema funciona en mode simulació.

---

# Funcionalitats principals

## Seguiment de mercats en temps real
- Preus actualitzats
- Variació percentual
- Volum i liquiditat
- Històric de preus
- Actualització live amb WebSockets

## Simulador d’inversions
- Saldo virtual
- Compra i venda simulada
- Seguiment de portfolio
- Càlcul de beneficis/pèrdues

## Alertes i notificacions
- Alertes per preu
- Alertes de prediccions
- Notificacions en temps real
- Futur suport per Telegram i email

## Dashboard personalitzat
- Favorits
- Watchlists
- Widgets personalitzats
- Interfície dark mode

## Visualització de dades
- Gràfics interactius
- Comparatives històriques
- Estadístiques bàsiques

---

# Mercats suportats

- Criptomonedes
- Accions
- Índexs financers
- Mercats predictius

---

# Stack tecnològic

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js
- Socket.io

## Base de dades
- MariaDB

---

# Arquitectura del projecte

```txt
Frontend (Client)
        ↓
 API REST (Express)
        ↓
      MariaDB
        ↑
Servidor WebSocket
```

---

# Estructura del projecte

```txt
marketpulse/
│
├── frontend/
├── backend/
├── database/
├── docs/
├── README.md
└── docker-compose.yml
```

---

# Base de dades

La base de dades gestiona:

- Usuaris
- Portfolios
- Posicions simulades
- Alertes
- Watchlists
- Assets financers
- Històric de dades

## Entitats principals

- users
- assets
- portfolios
- positions
- alerts
- watchlists

---

# APIs previstes

## APIs financeres
- CoinGecko API
- Finnhub API
- Polymarket API

## Sistemes de notificació
- WebSockets
- Email
- Telegram Bot
- Push Notifications

---

# Instal·lació

## Clonar repositori

```bash
git clone https://github.com/usuari/marketpulse.git
```

## Instal·lar dependències

```bash
cd backend
npm install
```

## Configurar variables d’entorn

Crear fitxer `.env`

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=marketpulse
```

## Executar servidor

```bash
npm run dev
```

---

# Configuració de la base de dades

Crear la base de dades:

```sql
CREATE DATABASE marketpulse;
```

Importar schema:

```bash
mysql -u root -p marketpulse < schema.sql
```

---

# Millores futures

- Integració amb IA
- Sistema social de prediccions
- Estadístiques avançades
- Aplicació mòbil
- Leaderboards
- Multiidioma
- Analytics avançats

---

# Desenvolupament col·laboratiu

El projecte es desenvolupa mitjançant branques de GitHub.

Exemples:

```bash
feature/frontend-dashboard
feature/backend-api
feature/database-system
feature/alerts
```

---

# Equip

Projecte desenvolupat col·laborativament per al hackató del curs.

---

# Llicència

Projecte amb finalitats educatives i acadèmiques.
