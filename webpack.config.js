const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[ //配置插件的节点 
    new VueLoaderPlugin(),
     new htmlWebpackPlugin({ //② 创建一个在内存中生成HTML页面的插件
            // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
           template:path.join(__dirname,'./src/index.html'),
           filename:'index.html' //指定生成页面的名称
       })
    ],
    resolve:{
        alias:{ //修改vue被导入时候的包的路径
            "vue$":"vue/dist/vue.js"
        }
    },
    module:{ 
        rules:[ 
            // {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.css$/,use:['vue-style-loader','css-loader']},
            {test:/\.(png|jpg|gif|bmp|jpeg)$/,use:'url-loader?limit=2740&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
       ]
   }
}