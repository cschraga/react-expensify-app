//NODE.JS


const path   = require('path'); //get path library
const mypath = path.join(__dirname,'public'); //use join method to get right absolute dir and add public to it

//loaders can be googled at npmjs.com

module.exports = {
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
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: mypath,
        historyApiFallback: true
    }
};

//history api fallback tells index.html to handle 404s. necessary for React Router
