var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:'development',

    //配置入口文件，入口文件可以以对象的形式配置，也可以以数组的形式配置,后缀名可以省略
    /*
     * 对象形式配置入口
     * */
    //entry:{
    //    index:'./index'       //'./index.js'
    //},
    /*
     * 数组形式配置入口
     * */
    entry: {
        index: './src/main.js',
        demo: './demo/demo.js'
    },
    //输出文件出口
    output: {
        /*
         输出路径，在这我们要手动创建一个文件夹，名字可以自己命名，
         输出的文件路径是相对于本文件的路径
         * */
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js' //输出文件名，文件可以自己定义，[name]的意思是与入口文件的文件对应，可以不用[name]，
    },
    // plugins: [
    //     // 开启全局的模块热替换(HMR)
    //     new webpack.HotModuleReplacementPlugin(),
    //     new OpenBrowserPlugin(
    //       {
    //         url: 'http://localhost:8080/echart_demo.html'
    //       }
    //     )
    // ],


    plugins: [
        
        new CopyWebpackPlugin(
            [ // 复制插件
                {
                    from: path.join(__dirname,'../demo'),
                    to:  path.join(__dirname,'../dist')
                }
            ]
        )
        ,
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: 'Hello World app',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            },
            filename: 'index.html',
            template: './demo/index.html'
        }),
    ],
    module: {
        rules: [
            // {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
            // {test:/\.(jpg|png|gif)$/i,use:{
            //     loader:'file-loader',
            //     options:{
            //         outputPath:'images/'
            //     }
            // }},
            // {test:/\.(jpg|png|gif)$/i,use:{
            //     loader:'url-loader',
            //     options:{
            //         outputPath:'images/',//相对打包输出目录
            //         limit:38*1024//小于或等于38k的与base64的格式输出的文件中,大于的与文件格式输出
            //     }
            // }},
            {
                test: /\.js?$/i,
                exclude: /node_modules/, //排除相关文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                { "modules": false }
                                // {
                                //     "targets": {
                                //         "chrome": 52,
                                //         "browsers": ["last 2 versions", "safari 7"]
                                //     }
                                // }
                            ]

                        ]
                    }

                }

            }
        ]
    },
    /*
     *
     * */
    resolve: {
        /*
         * 别名配置，配置之后，可以在别的js文件中直接使用require('d3')，将导入的文件作为一个模块导入到你需要的项目中，不用配置别也可会当作模块导入项目中，只是你要重复写路径而已。
         * */
        alias: {
            'KyLin': '../src/main.js'
        }
    }
}