const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry:'./app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,  //injector to browser, allows auto updating without refresh
        port: 8080,  //8080 is default, 3000 works too, use localhost:8080 on browser
        host: '0.0.0.0' //allows devices on the same network access to site, ipconfig and use IPv4 Address to access site from other devices
    },
    mode: 'development',
    //watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}