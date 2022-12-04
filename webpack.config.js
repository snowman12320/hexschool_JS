const path = require('path'); //適應各裝置 而轉絕對路徑

module.exports = {
  entry: './src/index.js',//輸入打包的js檔名
  output: {
    path: path.resolve(__dirname, 'dist'), //輸出的資料夾
    filename: 'bundle.js', //輸出的檔名
  },
};