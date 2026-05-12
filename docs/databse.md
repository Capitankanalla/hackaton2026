1. Overview
La base de dades plataforma_mercats gestiona tota la informació necessària per al seguiment
de mercats financers en temps real,

incloent:

Usuaris, registre necessari per la gestió dels assets.

Actius financers

Preus i històrics

Alertes, Avisos que reb un usuari quan pasa tal o qual acció    

Watchlists, vigilància d'actius que pot activar les alertes.  

Cartera simulada

Ordres de compra/venda simulades

2. Diagrama
docs/database-schema.png, d'una ullada

docs/database-schema.mwb, schema complet

3. Taules principals
users
Usuaris registrats.
username, email únics
password_hash
created_at

assets
Defineix tots els actius disponibles a la plataforma:

symbol → ticker curt
api_symbol → ticker real per API
type → stock, crypto, forex, index, commodity
exchange, currency, region

is_active per activar/desactivar actius
asset_prices

Històric de preus i dades OHLC:

timestamp UNIX
price, open_price, high_price, low_price, close_price
volume, change_percent
FK → asset_id
Adaptat al model Finnhub API. (asset_id, timestamp).

watchlists
Llistes de seguiment creades per cada usuari.
watchlist_assets
Relació N:N entre watchlists i actius.
alerts

Alertes de preu configurades per l’usuari:

condition_type → above / below
target_price
triggered
portfolios

Cartera simulada de cada usuari:

balance
FK → user_id

positions
Posicions obertes dins la cartera.

quantity
average_price
K → portfolio_id, asset_id

simulated_orders
Historial d’ordres simulades (compra/venda).

order_type → buy / sell
quantity, price
created_at

4. Relacions principals
1 usuari → N watchlists

1 watchlist → N actius (N:N)

1 usuari → 1 cartera

1 cartera → N posicions

1 actiu → N preus

1 usuari → N alertes

5. Notes tècniques
Preparada per ingestió contínua de dades de plataformes financeres.

Índexs creats per consultes ràpides d’històrics.

Dissenyada per suportar WebSockets i actualitzacions en temps real.

6. Fitxers relacionats
Diagrama:

docs/database-schema.png

docs/database-schema.mwb

SQL complet:

sql/database.sql
