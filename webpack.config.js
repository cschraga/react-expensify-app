//this is a NODE.JS file not react


const path   = require('path'); //get path library
const mypath = path.join(__dirname,'public', 'dist'); //use join method to get right absolute dir and add public to it
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const CSSExtract = new ExtractTextPlugin('styles.css');
    const isProduction = env == 'production';
    console.log('isProduction =', isProduction ? 'production' : 'dev');
    return {
        entry: './src/app.js',
        output: {
            path: mypath,
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/, //this is a regex
                use: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.s?css$/, //this is a regex. optional s
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                        
                    ]
                })
                /*
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
                */
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
    
};

//loaders can be googled at npmjs.com

//old way, export an object. now we're going to export a function instead so it can be dynamic
/*
module.exports = {
    blah blah blah
};
*/
//history api fallback tells index.html to handle 404s. necessary for React Router
