##结合webpack搭建起vue的开发环境

1、创建一个项目并初始化
2、下载项目需要的资源包
-生产环境
    -vue
-开发环境
    -webpack
    -webpack-cli
3、项目在跟目录下面创建一个src文件夹 (source意思 源文件)，这个文件夹下面放源文件
4、项目跟目录下创建一个webpack.config.js (webpack配置文件)
5、src下面创建一个js文件作为项目的入口文件
6、配置webpack的文件
7、简单使用一下
8、根目录下面创建一个index.html文件作为项目页面的入口

##项目的目录结构
-dist (最终生成的文件-这个文件夹才是最终需要上传到服务器的代码)
-node_modules (放资源包)
-src    (源文件，里面放置一些项目自己写的模块，被webpack打包的问价，都需要放到这个文件夹下面)
-index.js   (项目的打包入口)
-index.html     (项目页面入口)
-package-lock.json (包锁文件)
-package.json (项目依赖的资源包与项目的描述信息文件)
-webpack.config.js  (webpack的配置文件)

##webpack 的配置

四大核心    模式、入口、出口是必须要配置的（在webpack.config.js中暴露一个写这些选项的对象）
-模式   (指定这次打包是打的开发环境用的包，还是生成环境用的包 4.X+支持)
-入口   (指定webpack需要打包的项目的入口文件)
-出口   (打包之后生成的文件需要放到的那个位置)
-加载器 (默认情况下，webpack只是简单的打包js文件，如果需要打包 css img 之类的文件，则需要添加相对应的加载器去处理这类的文件)
-插件   (插件是加载器干不了的事情，就可以用插件来干)

##如何调用 webpack 开始打包
命令行中，使用webpack 这个命令
-./node_modules/.bin/webpack
-npx webpack (npm 5.0以上新增功能)
-配置 package.json 文件 webpack

#插件的使用
HtmlWebpackPlugin
1、找到需要使用的插件并安装他
2、在webpack.config.js中引入
3、在plugins选项中调用他，并按照他的文档去配置文件