//这个就是webpack的配置文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


//需要暴露一个对象，注意：这里用的暴露的方式还是commonjs方式
module.exports = {
    //模式
    mode: 'production',//development （开发模式） production（生产模式）
    //入口
    entry: './src/index.js',
    //出口
    output: {
        //出口位置（绝对路径）
        path: path.resolve(__dirname,'./dist'), //根目录下的dist文件夹
        filename:'bundle.js',
    },
    //插件
    plugins:[
        //自动生成一个HTML文件在出口的位置，并在生成的文件中引入打包生成的js文件
        new HtmlWebpackPlugin({
            title:'三只老鼠',
            filename:'abc.html',
            template:'./index.html',//将index.html作为生成的文件模板
        }),
        new CopyWebpackPlugin([
            {
                from:'./lib/jquery.min.js',
                to:'lib'
            }
        ]),
    ],
    //解析
    resolve:{
        //别名
        alias:{
            vue:'vue/dist/vue.esm.js'
        }
    },

    //webpack-dev-server配置
    devServer:{
        //配置以哪个文件作为web服务的根路径
        contentBase: path.resolve(__dirname,'./dist'),
    }
}