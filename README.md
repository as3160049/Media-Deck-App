# MediaDeck

Search for photos, videos, and GIFs in one place, then save the results you want to revisit in a personal collection. MediaDeck is a React single-page app built with Redux Toolkit and powered by the Unsplash, Pixabay, and GIPHY APIs.

## Features

- Search across three media types: photos, videos, and GIFs
- Switch between media types with the search tabs
- Preview results and open their source in a new tab
- Save items to a collection, remove them, or clear the collection
- Keep your collection between visits using browser `localStorage`
- Responsive interface styled with Tailwind CSS

## Tech stack

- React 19 and Vite
- Redux Toolkit and React Redux
- React Router
- Tailwind CSS
- Axios
- React Toastify

## Getting started

### Requirements

- Node.js (a current LTS release is recommended)
- npm
- API credentials for Unsplash, Pixabay, and GIPHY

### Install and run

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/as3160049/ReduxProj.git
   cd ReduxProj
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your API keys:

   ```dotenv
   VITE_UNSPLASH_KEY=your_unsplash_access_key
   VITE_PIXABAY_KEY=your_pixabay_api_key
   VITE_GIPHY_KEY=your_giphy_api_key
   ```

   Get credentials from the providers' developer dashboards: [Unsplash](https://unsplash.com/developers), [Pixabay](https://pixabay.com/api/docs/), and [GIPHY](https://developers.giphy.com/).

4. Start the development server:

   ```bash
   npm run dev
   ```

   Open the local URL printed by Vite in your terminal.

> **API key note:** Vite exposes variables prefixed with `VITE_` to browser code. Use keys intended for client-side use, follow each provider's terms and rate limits, and never put private or privileged credentials in this app. If you change `.env`, restart the development server.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## How to use

1. Enter a search term and submit it.
2. Choose **Photos**, **Videos**, or **GIFs** to browse the corresponding results.
3. Select **Save** on a result to add it to your collection.
4. Open **Collection** to view saved items; remove individual items or clear the collection.

Saved items are stored in this browser's local storage. They are not synced between devices, and clearing browser site data will remove them.

## Project structure

```text
src/
├── api/          # API requests to Unsplash, Pixabay, and GIPHY
├── components/   # Search, navigation, tabs, and media cards
├── pages/        # Home and collection views
└── redux/        # Redux store and search/collection state
```

## Acknowledgements

Media search results are provided by [Unsplash](https://unsplash.com/), [Pixabay](https://pixabay.com/), and [GIPHY](https://giphy.com/). Please review their respective terms, attribution requirements, and API usage limits.
