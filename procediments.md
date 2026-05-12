Instruccions per mantenir el projecte net:

# Guia de desenvolupament col·laboratiu

Aquest document defineix les normes bàsiques de treball amb Git i GitHub per mantenir el projecte organitzat i evitar conflictes durant el desenvolupament.

---

# Flux de treball

## IMPORTANT

NO treballar directament sobre `main`.

Cada funcionalitat o apartat del projecte s’ha de desenvolupar en una branca independent.

---

# Actualitzar el repositori

Abans de començar a treballar:

```bash
git pull origin main
```

---

# Crear una nova branca

Format recomanat:

```bash
git checkout -b feature/nom-feature
```

Exemples:

```bash
git checkout -b feature/frontend-dashboard
git checkout -b feature/backend-api
git checkout -b feature/database-system
git checkout -b feature/alerts
```

---

# Afegir canvis

```bash
git add .
```

O afegir fitxers específics:

```bash
git add backend/src/server.js
```

---

# Crear commits

## Format recomanat

```bash
git commit -m "tipus: descripció"
```

### Exemples

```bash
git commit -m "feat: afegit sistema de login"
git commit -m "fix: corregit error websocket"
git commit -m "style: millores dashboard"
git commit -m "docs: actualitzat README"
```

---

# Tipus de commits

| Tipus | Descripció |
|---|---|
| feat | Nova funcionalitat |
| fix | Correcció d’errors |
| docs | Documentació |
| style | Canvis visuals o CSS |
| refactor | Reestructuració de codi |
| test | Tests |
| chore | Tasques internes/configuració |

---

# Pujar canvis a GitHub

```bash
git push origin nom-branca
```

Exemple:

```bash
git push origin feature/database-system
```

---

# Fer Pull Request

Quan una funcionalitat estigui estable:

1. Pujar branca
2. Obrir Pull Request
3. Revisar canvis
4. Fer merge a `main`

---

# Normes del projecte

## NO fer

- NO pujar `node_modules`
- NO modificar `.env`
- NO tocar fitxers d’altres membres sense avisar
- NO fer commits gegants amb 50 fitxers
- NO treballar directament a `main`

---

# SÍ fer

- Commits petits i clars
- Pull abans de push
- Escriure missatges descriptius
- Separar frontend/backend/database
- Mantenir el codi ordenat

---

# Resolució de conflictes

Si hi ha conflictes:

```bash
git pull origin main
```

Resoldre conflictes manualment i després:

```bash
git add .
git commit -m "fix: resolts conflictes merge"
```

---

# Fitxers sensibles

Aquests fitxers NO s’han de pujar:

```txt
.env
node_modules/
dist/
coverage/
```

---

# Exemple complet de workflow

## 1. Actualitzar projecte

```bash
git pull origin main
```

## 2. Crear branca

```bash
git checkout -b feature/database-system
```

## 3. Treballar

Modificar fitxers.

---

## 4. Afegir canvis

```bash
git add .
```

## 5. Commit

```bash
git commit -m "feat: creat schema inicial MariaDB"
```

## 6. Push

```bash
git push origin feature/database-system
```

---

# Organització recomanada

## Frontend
Responsable de:
- HTML
- CSS
- Dashboard
- Components visuals

---

## Backend
Responsable de:
- Express
- APIs
- WebSockets
- Routes

---

## Database
Responsable de:
- MariaDB
- Schema SQL
- Queries
- Integritat de dades
- Seeders

---

# Recomanacions finals

Per al hackató:
- Prioritzar funcionalitats estables
- Prioritzar una demo visual atractiva
- Evitar complexitat innecessària
- Fer commits freqüents
- Mantenir `main` sempre funcional

---

# Objectiu final

Tenir una demo funcional amb:
- Dashboard realtime
- Simulació d’inversions
- Alertes
- Base de dades funcional
- Interfície clara i estable
