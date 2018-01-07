module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './nuxtServer.js';
    return config;
  }
};
