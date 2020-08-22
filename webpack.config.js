module.exports = function(env) {
  if (env && env.appProd) {
    return require('./webpack.config.app.prod.js');
  } else if (env && env.appDev) {
    return require('./webpack.config.app.dev.js');
  } else if (env && env.css) {
    return require('./webpack.config.css-library.js');
  } else if (env && env.js) {
    return require('./webpack.config.js-library.js');
  }
};
