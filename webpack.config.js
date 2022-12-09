import webpack from 'webpack';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", 'sass-loader', "resolve-url-loader", {
          loader: "sass-loader", options: {
            sourceMap: true,
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp3|ico)$/,
        use: [{
          loader: "url-loader",
          options: {
            name: '[hash]-[name].[ext]',
            esModule: false,
          },
        }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'images': path.resolve(__dirname, '/src/images/')
    },
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/favicons',
          to: 'favicons'
        },
        {
          from: 'src/images',
          to: 'images'
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    static: {
      directory: path.join(__dirname, 'dist/'),
    },
    devMiddleware: {
      publicPath: 'http://localhost:5001/',
    },
    client: {
      overlay: false,
    },
    hot: true,
    port: 5001,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  },
}

export default config;