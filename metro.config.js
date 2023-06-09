/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    }),
    babelTransformerPath: require.resolve('@tingyunapp/react-native-tingyunapp/src/NBSTransformer.js')
  }
}
