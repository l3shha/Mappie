# Mappie 🗺️

Mappie is a web application for discovering interesting places around you.

The app provides an interactive map, place search, detailed information, route building, favorites, and user authentication.

## 🚀 Live Demo

https://mappie-blue.vercel.app/

## ✨ Features

- 🗺️ Interactive map with Leaflet
- 📍 Search for places around your location
- 🔎 Search places by name
- 📄 Detailed place information
- ❤️ Personal favorites
- 🔐 Email/password authentication
- 🌐 Google authentication
- ☁️ Favorites stored in Firebase Firestore
- 🧭 Route building
- 📱 Responsive interface

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Redux Toolkit
- React Router
- Leaflet / React Leaflet
- styled-components
- Firebase Authentication
- Firebase Cloud Firestore
- OpenTripMap API

## 📁 Project Structure

    src/
    ├── components/      # Reusable UI components
    ├── pages/           # Application pages
    ├── hooks/           # Custom React hooks
    ├── slices/          # Redux Toolkit slices
    ├── store/           # Redux store
    ├── constants/       # Constants and theme
    ├── appTypes/        # TypeScript types
    ├── assets/          # Images and icons
    ├── firebase.ts      # Firebase configuration
    └── main.tsx         # Application entry point

## ⚙️ Installation

### 1. Clone the repository

    git clone https://github.com/l3shha/Mappie.git
    cd Mappie

### 2. Install dependencies

    npm install

### 3. Configure environment variables

Create a `.env` file in the project root.

You can use `.env.example` as a template:

    # Firebase
    VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

    # OpenTripMap
    VITE_OPENTRIPMAP_API_KEY=YOUR_OPENTRIPMAP_API_KEY

Never commit your `.env` file or real API keys to Git.

### 4. Configure Firebase

In Firebase Console:

- Enable Email/Password authentication
- Enable Google authentication
- Create a Cloud Firestore database

Firestore favorites are stored per authenticated user, using their Firebase UID.

### 5. Start the development server

    npm run dev

The application will be available at:

    http://localhost:5173

## 🔥 Firebase

Firebase Authentication is used for user accounts.

Supported authentication methods:

- Email/password
- Google

Cloud Firestore is used to store user favorites.

Each user's favorites are associated with their Firebase UID, allowing them to access their saved places from different devices.

## 🗺️ OpenTripMap

OpenTripMap API is used to retrieve:

- Places around the user
- Place details
- Categories
- Descriptions
- Addresses
- Images

## ▶️ Available Scripts

    npm run dev       # Start development server
    npm run build     # Create production build
    npm run preview   # Preview production build
    npm run lint      # Run ESLint

## 🚀 Deployment

The application is deployed with Vercel.

Live version:

https://mappie-blue.vercel.app/

Environment variables must be configured in the Vercel project settings.

## 👨‍💻 Author

**Alexey Ramanenya** · [GitHub](https://github.com/l3shha)

---

⭐ If you like the project, consider giving it a star.
