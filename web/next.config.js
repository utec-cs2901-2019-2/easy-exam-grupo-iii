const withFonts = require("next-fonts");

module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5
  },
  withFonts: {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    loader: "file-loader",
    webpack(config, options) {
      return config;
    }
  }
};

