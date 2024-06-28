# CoRider Assignment

## React TypeScript PWA with Vite

This is a Progressive Web App (PWA) built with React and TypeScript, using Vite as the build tool. The app fetches and displays chat data and includes various components such as `App`, `Body`, `Header`, and `Input`. Custom hooks like `useFetchData` and `useFetchProfile` are used to manage data fetching.

### Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Components](#components)
- [Hooks](#hooks)
- [Service Worker](#service-worker)
- [Deployment](#deployment)
- [Contributing](#contributing)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```sh
   cd your-repo-name
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

### Features

- Responsive chat interface
- Fetch and display chat data
- Progressive Web App capabilities
- Offline support with service worker
- Deployable on Netlify

### Components

#### App

The main component that ties all other components together.

#### Header

Displays the chat header with user details.

#### Body

Displays the chat messages.

#### Input

Provides an input field for typing and sending messages.

### Hooks

#### useFetchData

Custom hook to fetch chat data from an API.

#### useFetchProfile

Custom hook to fetch a user profile image.

### Service Worker

The service worker is configured using the `vite-plugin-pwa` plugin. It caches the necessary assets and provides offline support.

#### Important Files

- `src/service-worker.ts`

  ```typescript
  import { precacheAndRoute } from "workbox-precaching";

  // @ts-ignore: __WB_MANIFEST is injected by workbox at build time
  precacheAndRoute(self.__WB_MANIFEST);

  self.addEventListener("install", (event: ExtendableEvent) => {
    console.log("Service Worker installing.");
  });

  self.addEventListener("activate", (event: ExtendableEvent) => {
    console.log("Service Worker activating.");
  });

  self.addEventListener("fetch", (event: FetchEvent) => {
    console.log("Fetching:", event.request.url);
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  ```

### Deployment

1. Build the project:

   ```sh
   npm run build
   ```

2. Deploy the `dist` directory to Netlify.

### Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Open a pull request.
