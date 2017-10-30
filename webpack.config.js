module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: './dist/[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    }
};
