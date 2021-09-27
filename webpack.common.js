"use strict";

var path = require('path');
var webpack = require('webpack');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    output:
        {
            filename: '[name].js',
            chunkFilename: '[name].js',
            publicPath: './dist/',
            path: path.resolve(__dirname, 'dist'),
            assetModuleFilename: 'assets/[hash][ext][query]'
        }
    ,
    devServer: {
        static: path.join(__dirname, '/'),
        port: 3000,
        open: true,
        devMiddleware: {
            index: true,
            mimeTypes: { 'text/html': ['phtml'] },
            publicPath: './dist/',
            serverSideRender: false,
            writeToDisk: true,
          },
      },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-to-string-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'fast-sass-loader',
                        options:
                            {
                                implementation: require('node-sass')
                            }
                    }
                ]
            },           
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|png|jpg|gif|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.adv.js'],
        alias: {                        
            util: "util",
            process: "process/browser",
            buffer: "buffer"
        },
        mainFields: ['es2015', 'browser', 'module', 'main'],
        fallback: { 
            "assert": require.resolve("assert"),
            "buffer": require.resolve("buffer"),
            "console": require.resolve("console-browserify"),
            "constants": require.resolve("constants-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "domain": require.resolve("domain-browser"),
            "events": require.resolve("events"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "path": require.resolve("path-browserify"),
            "punycode": require.resolve("punycode"),
            "process": require.resolve("process/browser"),
            "querystring": require.resolve("querystring-es3"),            
            "stream": require.resolve("stream-browserify"),
            "_stream_duplex": require.resolve("readable-stream/duplex"),
            "_stream_passthrough": require.resolve("readable-stream/passthrough"),
            "_stream_readable": require.resolve("readable-stream/readable"),
            "_stream_transform": require.resolve("readable-stream/transform"),
            "_stream_writable": require.resolve("readable-stream/writable"),
            "string_decoder": require.resolve("string_decoder"),
            "sys": require.resolve("util"),
            "timers": require.resolve("timers-browserify"),
            "tty": require.resolve("tty-browserify"),
            "url": require.resolve("url"),
            "util": require.resolve("util"),
            "vm": require.resolve("vm-browserify"),
            "zlib": require.resolve("browserify-zlib"),
        }
    },
    plugins: [        
        new webpack.NoEmitOnErrorsPlugin(),    
        new webpack.ProvidePlugin({
            util: 'util',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new CleanWebpackPlugin(),
        //new BundleAnalyzerPlugin()
    ],
    optimization:
    {        
        splitChunks: {
            cacheGroups:
            {
                commons:
                {
                    test: /[\\/](node_modules|vendor-libs)[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }                                
            }
        }
    },
    stats:
        {
        warnings: false
        }
};


