# wangEditor-demo
wangEditor-demo,seajs,formidable
123

### 步骤
1. 下载项目
2.  npm i
3. node server.js


提示：当用sea.js时，要使jquery支持cmd,需要修改jquery源码
```js
//调整前：
if ( typeof define === "function" && define.amd ) {
    define( "jquery", [], function() {
        return jQuery;
    });
}

//调整后：
if ( typeof define === "function") {
    define( "jquery", [], function() {
        return jQuery;
    });
}
```
wangEditor文档：[http://www.kancloud.cn/wangfupeng/wangeditor2/113996](http://www.kancloud.cn/wangfupeng/wangeditor2/113996)
