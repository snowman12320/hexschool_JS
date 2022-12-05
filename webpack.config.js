const path = require("path"); //適應各裝置 而轉絕對路徑

module.exports = {
  entry: "./src/index.js", //輸入打包的js檔名
  output: {
    path: path.resolve(__dirname, "dist"), //輸出的資料夾
    filename: "bundle.js", //輸出的檔名
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          // "sass-loader",
        ],
      },
    ],
  },
  // 開伺服器用不到 應該會在開發完上線時 一次打包成一個上線版JS檔就好
  devServer: {
    static: {
        // dist改成 /
      directory: path.join(__dirname, "/"),
    },
    // 以下別包在上方
    compress: true,
    // open: true,
    port: 9000,
  },
};
