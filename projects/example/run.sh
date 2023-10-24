# Install Node.js and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install node

# Initialize a new Node.js project
npm init -y

# Install TypeScript, React, and ReactDOM
npm install --save react react-dom
npm install --save-dev typescript @types/react @types/react-dom

# Create a tsconfig.json file for TypeScript configuration
echo '{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}' > tsconfig.json

# Install webpack and necessary loaders
npm install --save-dev webpack webpack-cli ts-loader html-webpack-plugin

# Create a webpack.config.js file
echo 'const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};' > webpack.config.js

# Create a src/index.tsx file that renders the AddPage component
echo 'import React from "react";
import ReactDOM from "react-dom";
import AddPage from "./pages/add_page";

ReactDOM.render(<AddPage />, document.getElementById("root"));' > src/index.tsx

# Create a src/index.html file
echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script src="./bundle.js"></script>
</body>
</html>' > src/index.html

# Run the webpack build
npx webpack

# Install and run a static server to serve the built files
npm install --save-dev serve
npx serve dist
