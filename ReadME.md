# 🎮 Pokémon Explorer

A modern, responsive web application for exploring Pokémon data built with React, TypeScript, and the PokéAPI. Features both pagination and infinite scroll viewing modes with detailed Pokémon information cards.

![Pokémon Explorer](pokemon/public/pokemon.png)

## ✨ Features

- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🔄 Dual Navigation Modes** - Switch between pagination and infinite scroll
- **🎨 Beautiful UI** - Modern design with Tailwind CSS and shadcn/ui components
- **⚡ Fast Performance** - Built with Vite and optimized with React Query caching
- **🔍 Detailed Pokémon Info** - View comprehensive stats, abilities, types, and artwork
- **🎯 Type-Safe** - Full TypeScript support for better development experience
- **🌈 Dynamic Theming** - Background colors that adapt to current viewing mode

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Pok-mon
```

2. Navigate to the pokemon directory:
```bash
cd pokemon
```

3. Install dependencies:
```bash
pnpm install
# or
npm install
```

4. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🏗️ Tech Stack

### Core Technologies
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### State Management & Data Fetching
- **TanStack React Query** - Server state management and caching
- **React Context** - Local state management

### Code Quality
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
pokemon/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── details/         # Pokémon detail page components
│   │   ├── home/           # Home page components
│   │   ├── shared/         # Shared components
│   │   └── ui/             # shadcn/ui components
│   ├── contexts/           # React Context providers
│   ├── lib/               # Utilities and configurations
│   │   ├── fetch-pokemon.tsx  # API functions
│   │   ├── interfaces.ts     # TypeScript interfaces
│   │   └── utils.ts         # Helper functions
│   ├── pages/             # Page components
│   └── main.tsx           # Application entry point
├── public/                # Static assets
└── package.json
```

## 🎮 Usage

### Home Page
- Browse Pokémon using pagination or infinite scroll
- Switch between viewing modes using the control buttons
- Click on any Pokémon card to view detailed information

### Pokémon Details
- View high-quality official artwork
- See comprehensive stats, abilities, and characteristics
- Navigate back to the main list

### Navigation Modes
- **Pagination**: Traditional page-by-page browsing
- **Infinite Scroll**: Seamless continuous loading

## 🌐 API

This project uses the [PokéAPI](https://pokeapi.co/) - a RESTful API for Pokémon data.

### Key Endpoints Used:
- `GET /pokemon` - List Pokémon with pagination
- `GET /pokemon/{id}` - Get detailed Pokémon information

## 🎨 Customization

### Theming
The app uses dynamic background colors that change based on the current navigation mode. You can customize these in `src/lib/utils.ts`.

### Components
All UI components are built with shadcn/ui and can be customized by modifying the files in `src/components/ui/`.

## 🔧 Configuration

Key configuration files:
- `vite.config.ts` - Vite configuration with path aliases
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and settings
- `components.json` - shadcn/ui configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

