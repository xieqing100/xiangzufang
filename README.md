### 安装（更新） wepy 命令行工具。
	npm install wepy-cli -g

### 安装依赖包
	npm install

### 开发实时编译。
	npm run dev

### 生产压缩
	npm run build //上传代码时，请先执行此代码，否则会提示包体积过大


### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择根目录，自动配置开发者工具。

2、默认开发模式下构建不压缩代码，真机预览时请先build。



### wepy开发文档地址
	https://tencent.github.io/wepy/

### 小程序开发文档
	http://mp.weixin.qq.com/debug/wxadoc/dev/
    
### 目录结构

    ├── api
    │   └── index.js            //接口
    ├── app.wpy                 //入口文件
    ├── components              //组件
    │   ├── component1.wpy      
    │   ├── common              //公共组件
    │   │   ├── commonComponet1.wpy
    ├── images                  //图片文件夹
    ├── pages                   //页面
    ├── store                   //redux模块
    ├── mixins                  //混合项
    │   ├── index.wpy           //首页  
    ├── styles                  //样式文件
    │   ├── base.less
    │   ├── icon.less           
    │   └── style.less
    └── utils                   //工具类
        ├── constant.js             //常量
        ├── regions.js              //省市区数据
        ├── tip.js                  //提示弹框组件
        ├── util.js                 //常用方法
        └── wxRequest.js            //请求模块
