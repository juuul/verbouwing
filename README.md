# Verbouwing Notes Site

Eenvoudige statische website voor:
- keuken specificaties
- overkapping specificaties
- dak specificaties

## Structuur

```text
.
├── assets/
│   └── css/
│       └── styles.css
├── index.html
├── keuken.html
├── overkapping.html
├── dak.html
```

## Lokaal draaien

Er is geen build-stap nodig: dit is een statische site.

Optie 1 (Python):

```bash
cd /tmp/workspace/juuul/verbouwing-
python3 -m http.server 8080
```

Open daarna: `http://localhost:8080`

De root (`index.html`) stuurt direct door naar `keuken.html`.

Optie 2:
- Open `index.html` direct in de browser.

## Inhoud aanpassen

- Teksten aanpassen: bewerk de `.html` bestanden.
- Styling aanpassen: bewerk `assets/css/styles.css`.
- Nieuwe pagina toevoegen:
  1. Kopieer een bestaande pagina.
  2. Voeg een link toe in de navigatie van alle pagina's.
  3. Houd dezelfde eenvoudige structuur aan.
