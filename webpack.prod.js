//const ngToolsWebpack = require('@ngtools/webpack');
//const ngToolsWebpack = require('@ngtools/webpack');
//import { AngularWebpackPlugin } from '@ngtools/webpack';
const AngularWebpackPlugin = require('@ngtools/webpack').AngularWebpackPlugin;

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = merge(common,
    {
        mode: 'production',
        entry:
        {
            polyfillsbundle: './app/polyfills.ts',
            appbundle: './app/main-prod.ts'
        },
        module:
        {
            rules:
                [                                       
                {
                    test: /\.[jt]sx?$/,
                    use: '@ngtools/webpack',
                    include: [path.resolve(__dirname, "app")],
                    exclude: [path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "app/vendor-libs")]                
                }
            ]
        },
        plugins:
            [   
                new webpack.DefinePlugin({                  
                    GOOGLEMAPS_API_KEY: JSON.stringify('')
                }),
                new AngularWebpackPlugin({
                    tsconfig: './tsconfig.json',
                    //entryModule: './app/app.module#AppModule',
                    //sourceMap: false
                })
            ]
    });