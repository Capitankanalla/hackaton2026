<!-- Bases per que tots tinguem en local les mateixes dades: -->

# MarketPulse - Setup local

## 1. Clonar repositori

git clone https://github.com/Jofre/hackaton-CIFOLaVioleta-18-05-2026.git
Assegurar que el directori es: dir hackaton-CIFOLaVioleta-18-05-2026
Sino, feu cd directori.

## 2. Inicialitzar projecte:

npm init -y (al terminal de vsc)

## 3. Instal.lar dependències:

npm install express dotenv cors
npm install --save-dev nodemon

## 4. Crear el .env:

PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=marketpulse

SESSION_SECRET=super_secret_key

amb tot aixó, en local, ja podreu executar el npm run dev (el servidor) per treballar 
a localhost:3000.

No oblideu executar el marketPulse.sql per crear la db i poder treballar amb les dades.

