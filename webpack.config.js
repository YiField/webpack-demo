// 打包前端资源

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development'; //cross-env :兼容mac window
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const ExtractPlugin = require('extract-text-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? './' : '/';
const CopyWebpackplugin = require('copy-webpack-plugin');

const config = {
  target: 'web',
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        // loader: 'vue-loader'
        use: [
          'thread-loader',
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                sass: [
                  'vue-style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader?indentedSyntax'
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              use: ['url-loader?limit=8000&name=img/[name].[hash].[ext]'] //[name]:原来的名字 [ext]:文件扩展名
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"' //dev渲染错误提醒？
      }
    }),
    new HtmlPlugin({
      template: './index.html',
      filename: './index.html',
      inject: true,
      favicon: path.resolve('src/assets/images/bitbug_favicon.ico')
    }),
    new CopyWebpackplugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'static'),
          to: 'static/'
        }
      ]
    })
  ],
  /*resolver 帮助 webpack 找到 bundle 中需要引入的模块代码，这些代码在包含在每个 require/import 语句中。 当打包模块时，webpack 使用 enhanced-resolve 来解析文件路径*/
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(ROOT_PATH, 'src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};

//针对不同环境打包 build or dev
if (isDev) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'sass-loader'
    ] //每个loader只处理其部分
  });
  config.module.rules.push({
    test: /\.sass$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader?indentedSyntax']
  });
  config.devtool = '#cheap-module-eval-source-map'; //浏览器调试显示源码
  config.devServer = {
    port: 8009,
    host: 'localhost',
    overlay: {
      errors: true
    },
    open: true, //自动打开浏览器
    //没有配置路由的地址引进index
    // historyFallback: {    },
    hot: true //改变组件后，刷新组件不刷页面 热加载
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());
} else {
  config.output.filename = '[name].[chunkhash:8].js';
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'sass-loader'
    ]
  });
  config.module.rules.push({
    test: /\.sass$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'sass-loader?indentedSyntax'
    ]
  });
  config.module.rules.push({
    test: /\.sass$/,
    use: [
      'style-loader',
      MiniCssExtracPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'sass-loader?indentedSyntax'
    ]
  });
  config.plugins.push(new MiniCssExtracPlugin());
  // config.plugins.push(new ExtractPlugin('styles.[contentHash:8].css'))
}
module.exports = config;
