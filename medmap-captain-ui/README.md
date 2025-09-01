## MedMap Captain UI

Modern, minimal captain-facing UI built with React + Vite, TailwindCSS, React Router, and `@react-google-maps/api`.

### Setup
1. Install dependencies:
```bash
npm install
```
2. Copy env and add your Google Maps API key:
```bash
cp .env.example .env
# edit .env and set VITE_GOOGLE_MAPS_API_KEY
```
3. Start dev server:
```bash
npm run dev
```

### Routes
- `/login` – Captain login
- `/dashboard` – New request map and Accept button
- `/user-details` – Passenger info and Confirm Pickup
- `/hospital` – Destination details with two markers
- `/profile` – Captain profile and actions

