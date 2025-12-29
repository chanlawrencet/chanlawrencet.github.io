# chanlawrencet.github.io

Personal website built with React, showcasing projects and information.

**Live site:** [https://www.chanlawrencet.com](https://www.chanlawrencet.com)

## Tech Stack

- React 16.13.1
- React Scripts 5.0.1 (upgraded from 3.4.1 for Node.js 17+ compatibility)
- Blueprint.js for UI components
- Highcharts for data visualization
- Styled Components for styling
- GSAP for animations

## Prerequisites

- Node.js (tested with v22.11.0, compatible with Node 17+)
- npm or yarn

## Setup

Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Build

Build for production:

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This automatically:
1. Builds the production version
2. Deploys to the `gh-pages` branch
3. Updates the live site at chanlawrencet.com

## Configuration Notes

### React Scripts 5 Upgrade

This project was upgraded from `react-scripts@3.4.1` to `react-scripts@5.0.1` to support modern Node.js versions (17+). The upgrade required:

1. **Webpack 5 Polyfills**: Added polyfills for Node.js core modules (`buffer`, `stream-browserify`) since Webpack 5 no longer includes them by default.

2. **React App Rewired**: Uses `react-app-rewired` to customize webpack configuration without ejecting. See `config-overrides.js` for the webpack fallback configuration.

### Custom Webpack Configuration

The `config-overrides.js` file provides:
- Fallbacks for `buffer` and `stream` modules (required by `xml-js` dependency)
- Global `Buffer` polyfill injection

## Project Structure

```
├── public/          # Static assets
├── src/            # React source code
│   ├── components/ # Reusable components
│   ├── weather/    # Weather-related components
│   └── Home.js     # Main app component
├── build/          # Production build (generated)
├── config-overrides.js  # Webpack customization
└── package.json    # Dependencies and scripts
```

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## License

Personal project by Lawrence Chan

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
