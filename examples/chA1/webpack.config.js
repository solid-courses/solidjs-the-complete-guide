/* eslint-disable @typescript-eslint/no-var-requires */
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { resolve, join } = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const outputDir = resolve(__dirname, './output');
const appEntry = resolve(__dirname, './src/index.tsx');

const common = {
  entry: {
    // We use key-value pairs in case we need
    // multiple entry points to our configuration.
    app: appEntry,
  },

  // Let Webpack resolve these extensions so that
  // we can include them in our project as a module.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        // Modules with ts, tsx, js and jsx extensions
        // are handled by babel-loader.
        // We use Babel for compiling TypeScript code
        // into JavaScript code and transform JSX syntax
        // to native JavaScript code.
        // We transform some of the newer JavaScript syntax
        // to something that can be run in older browsers.
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false, // Don’t use .babelrc to override these options.
            configFile: false, // Don’t use babel.config.json to override these options.
            presets: ['@babel/preset-env', 'solid', '@babel/preset-typescript'],
            // We use hot module replacement (HMR) only in development mode
            // to eliminate the shipping of the boilerplate HMR code in production.
            plugins: [...(isProduction === false ? ['solid-refresh/babel'] : [])],
          },
        },
      },
      {
        // Styles are handled by css-loader first, then style-loader.
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              // modules option enables CSS modules so that
              // we can import classes into js files
              // using the default module import syntax.
              modules: true,
              // importLoaders option sets how many loaders
              // before css-loader should be applied
              // to @imported resources and CSS modules/ICSS imports.
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 0,
            },
          },
        ],
      },
      {
        // Static images are handled by Webpack’s built-in asset modules.
        // Webpack copies them into the output folder.
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        // Fonts are handled by Webpack’s built-in asset modules
        // Resources with these extensions are inlined as data URI
        // They are converted into Base64 encoded text,
        // which can be decoded by the browser.
        // This is to reduce the browser’s roundtrips
        // when fetching remote resources.
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      // HTML file is served from this directory
      template: resolve(__dirname, './src/index.html'),
      // Sets page title,
      // which requires `<%= htmlWebpackPlugin.options.title %>`.
      title: 'My Solid App',
      // You can rename output file as you like
      filename: 'index.html',
    }),
  ],
};

const devConfig = merge(common, {
  output: {
    path: outputDir,
    // In dev mode we don’t need hash numbers in file names
    filename: '[name].js',
    publicPath: '/',
  },

  // Set the mode in case we forget to provide via CLI
  mode: 'development',

  // Configure source maps
  devtool: 'inline-source-map',

  // This is required for HMR
  plugins: [new webpack.HotModuleReplacementPlugin()],

  // Configure dev server
  devServer: {
    static: {
      directory: outputDir,
    },
    compress: true,
    port: 9000,
    open: false,
  },
});

const productionConfig = merge(common, {
  mode: 'production',

  devtool: false,

  output: {
    path: outputDir,
    // This is important for invalidating browser’s cache
    filename: 'js/[name].[contenthash].js',
    publicPath: './',
  },

  optimization: {
    minimize: true,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});

// We export a different configuration
// depending on the environment variable.
module.exports = isProduction ? productionConfig : devConfig;