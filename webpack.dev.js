const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

var path = require('path');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var HappyPackPlugin = require('happypack');

module.exports = merge(common,
    {
        mode: 'development',
        devtool: 'eval-cheap-module-source-map',
        entry:
            {      
                polyfillsbundle: './app/polyfills.ts',      
                appbundle: './app/main.ts'
            },
        module:
            {
                rules:
                    [                                                
                        {
                            test: /\.tsx?$/,
                            use: [
                                {
                                    loader: 'cache-loader'
                                },
                                {
                                    loader: 'happypack/loader'
                                },
                                {
                                    loader: 'angular-router-loader'
                                },
                                {
                                    loader: 'angular2-template-loader?keepUrl=false'
                                }
                            ],
                            include: [path.resolve(__dirname, "app")],
                            exclude: [path.resolve(__dirname, "node_modules")]
                        }
                    ]
            },
        plugins:
            [                
                new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './app')),
                new webpack.DefinePlugin({
                    GOOGLEMAPS_API_KEY: JSON.stringify('AIzaSyAUBf5wz02lbnY68SVDCXsP32RACwFQc9c')
                }),                
                new ForkTsCheckerWebpackPlugin({
                    typescript: {
                        memoryLimit: 4096,
                        mode: 'write-tsbuildinfo'
                    }
                }),
                new HappyPackPlugin({
                    threads: 4,
                    loaders:
                        [
                            {
                                loader: 'ts-loader',
                                options: { transpileOnly: true, happyPackMode: true }
                            }
                        ]
                })
            ]
    });