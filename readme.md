# OpenDashboard Pavia
    (Work in progress)

Un cruscotto di visualizzazione dati per gli Open Data del comune di Pavia.

#### Installazione locale ed utilizzo
- Installare NodeJS
- Clonare questo repository (o scaricarlo)
- Aprire il terminale nella cartella in cui è stato scaricato e avviare il server locale con il comando "npm start"
- Avviare un browser e visitare l'indirizzo http://localhost:9000

#### Roadmap
<del> **v0.1** - implementazione di almeno una funzionalità di visualizzazione dati multisorgente </del>

**v0.2** - codifica design dashboard (no responsive)

**v0.3** - aggiunta charts

**v0.4** - architettura di routing

**v0.5** - implementazione di almeno una visualizzazione mappa + layer dati multisorgente

**v0.6** - pagine statiche + social sharing

**v0.7** - template per dati tipo feed

**v0.8** - pubblicazione beta online

**v0.9** - aggiunta nuovi sorgenti a template già esistenti, rifiniture varie

**v1.0** - primo deploy su URL pubblico


#### Software utilizzato
Tutto il software e tutte le librerie che ho utilizzato per realizzare questo progetto sono distribuiti tramite licenze open-source.

- [Adobe Brackets]() (code editor)
- [Git]() (versioning)
- [SourceTree]() (Git GUI)
- [GruntJS]() (task runner)
- [Bower]() (frontend package manager)

#### Sviluppo
indicazioni per chi è interessato lavorare sul codice

**Librerie principali:**
- Zurb Foundation (griglia, elementi base)
- AngularJS (sviluppo frontend MVC)
- PapaParse (conversione file .csv in JSON)
- SHP2JSON (conversione file .shp in GeoJSON)
- Google Maps (mappe)

#### Design
grafica dashboard https://dribbble.com/shots/1763054-Free-PSD-Dashboard

#### Licenza
open source (devo ancora documentarmi su quale sia meglio)