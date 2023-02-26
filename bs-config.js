module.exports = {
  open: true,
  logLevel: "silent",
  "port": 8000,
  "files": ["./src/**/*.{html,htm,css,js}"],
  "notify": true,
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({
        index: '/index.html',
        verbose: true,
      }),
    },
  },
};
