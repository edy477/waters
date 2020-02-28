/*onst createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  return config;
};
*/const createExpoWebpackConfig = require("@expo/webpack-config");

module.exports = (env, argv) => {
  const config = createExpoWebpackConfig(env, argv);
  return config.then(c => {
    c.plugins = c.plugins.filter(
        x => x.constructor.name !== "WebpackDeepScopeAnalysisPlugin"
    );
    return c;
  });
};
