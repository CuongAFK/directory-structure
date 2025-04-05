# Project Structure Documentation

## Overview
This document outlines the structure of our full-stack web application, consisting of both frontend (React + Vite) and backend (Node.js + Express) components.

## Frontend Structure
```plaintext
src/
├── assets/
│   ├── icons/              # Icon assets
│   └── images/             # Image assets
├── components/
│   └── Button/
│       ├── Button.jsx      # Button component
│       ├── Button.module.css
│       └── index.js
├── contexts/
│   └── GameContext.js      # Game state management
├── hooks/
│   └── useGameLogic.js     # Custom game logic hook
├── pages/
│   └── HomePage/
│       ├── HomePage.jsx    # Main homepage component
│       ├── HomePage.module.css
│       └── index.js
├── services/
│   ├── authService.js      # Authentication service
│   └── gameService.js      # Game-related API calls
├── utils/                  # Utility functions
├── App.jsx                 # Root component
├── App.css                 # Global styles
├── index.css              
└── main.jsx               # Entry point
```

### Key Frontend Components
- **assets**: Static resources
- **components**: Reusable UI components
- **contexts**: React Context providers
- **hooks**: Custom React hooks
- **pages**: Page-level components
- **services**: API integration layer
- **utils**: Helper functions and utilities

## Backend Structure
```plaintext
backend/
├── config/
│   ├── database.js         # Database configuration
│   └── socket.js          # WebSocket setup
├── controllers/
│   ├── authController.js   # Authentication logic
│   └── gameController.js   # Game management
├── models/
│   ├── GameSession.js      # Game session schema
│   └── User.js            # User schema
├── routes/
│   ├── authRoutes.js      # Authentication endpoints
│   └── socketRoutes.js    # WebSocket routes
├── services/
│   ├── AuthService.js     # Authentication service
│   ├── GameService.js     # Game logic service
│   └── GameEntities/
│       ├── GameBoard.js   # Game board logic
│       ├── Player.js      # Player entity
│       └── Unit.js        # Game unit logic
├── .env                   # Environment variables
└── server.js             # Entry point
```

### Key Backend Components
- **config**: Application configuration
- **controllers**: Request handlers
- **models**: Database schemas
- **routes**: API endpoint definitions
- **services**: Business logic layer
- **GameEntities**: Game-specific classes

## Tech Stack
- Frontend: React, Vite, TailwindCSS
- Backend: Node.js, Express
- Database: MongoDB
- Real-time: WebSocket

## Getting Started
1. Clone the repository
2. Install dependencies:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```
3. Set up environment variables
4. Start development servers:
   ```bash
   # Frontend
   npm run dev

   # Backend
   npm run start
   ```

## Contributing
Please follow the existing structure when adding new features or components.
