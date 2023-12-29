const path = require('path');

module.exports = {
  // Setting the mode to development for better debugging, change to production for deployment
  mode: 'production',

  // Entry point of the function
  entry: './functions/api.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'api.js', // Bundled file name
  },

  // Targeting a Node.js environment, as Cloudflare Pages Functions run on the server-side
  target: 'node',

  // Configure how modules are resolved
  resolve: {
    extensions: ['.js'], // Add other extensions if needed
  },

  // Optionally, you can add more configurations like loaders, plugins, etc., depending on your needs
};