const { resolve } = require('path')
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./node_modules'],
        // 背景：第三方依赖的代码里存在弃用的prop-types，因为最新可用版本也没有处理，造成release包运行报错，所以单独对这些import进行处理
        resolvePath(sourcePath, currentFile) {
          if (
            sourcePath === 'react-native' &&
            !(
              (
                currentFile.includes('node_modules/react-native/') || // macos/linux paths
                currentFile.includes('node_modules\\react-native\\')
              ) // windows path
            ) &&
            !(currentFile.includes('resolver/react-native/') || currentFile.includes('resolver\\react-native\\'))
          ) {
            return resolve(__dirname, 'resolver/react-native')
          }
          return undefined
        }
      },
      'node_modules-react-native-deprecated-prop-types'
    ],
    [
      'module-resolver',
      {
        root: ['./app/'],
        alias: {
          '@': './'
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json']
      },
      'react-native-import-alias'
    ]
  ]
}
