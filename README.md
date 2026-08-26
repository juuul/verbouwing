# Projectoverzicht-site

Eenvoudige statische website met de specificaties van alle projecten:
- keuken
- dakpannen en isolatie
- overkapping
- tuintegels
- review (onduidelijkheden)

## Structuur

```text
.
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── tabs.js
├── index.html
├── keuken.html
├── dakpannen-en-isolatie.html
├── overkapping.html
├── tuintegels.html
└── review.html
```

## Lokaal draaien

Er is geen build-stap nodig: dit is een statische site.
Open `index.html` direct in de browser, of serveer de map lokaal:

```bash
python -m http.server 8080
```

Open daarna: `http://localhost:8080`

## Inhoud aanpassen

- Teksten aanpassen: bewerk de `.html` bestanden.
- Styling aanpassen: bewerk `assets/css/styles.css`.
- Nieuwe pagina toevoegen:
  1. Kopieer een bestaande pagina.
  2. Voeg een link toe in de navigatie van alle pagina's.
  3. Houd dezelfde eenvoudige structuur aan.
