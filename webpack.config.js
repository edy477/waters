/*onst createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  return config;
};
*/const createExpoWebpackConfig = require('@expo/webpack-config');

module.exports = function(env, argv) {
  env.mode = 'development';
  const config = createExpoWebpackConfig(env, argv);
// Customize the config before returning it.
  return config;
};
