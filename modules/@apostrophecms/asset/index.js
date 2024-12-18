export default {
  // When not in production, refresh the page on restart
  options: {
    refreshOnRestart: true,
    // HMR not working with Astro yet, because
    // Vite can't handle 2 HMR clients
    hmr: false,
    // Disable the module preload polyfill
    modulePreloadPolyfill: false
  }
};
