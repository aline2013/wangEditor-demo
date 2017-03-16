$(function(){

  // id名
  var editor = new wangEditor('editor-trigger');

  // 配置config
  // 顶部菜单栏
  editor.config.menus = [
    'bold',
    'italic',
    'emotion',
    'img',
    'fullscreen'
  ];

  // 自定义菜单UI
  editor.UI.menus.bold = {
    normal: '<button style="font-size:20px; margin-top:5px;">B</button>',
    selected: '.selected'
  };

  // 表情
  // 表情显示为value值
  editor.config.emotionsShow = 'value';
  editor.config.emotions = {
    'default': {
      title: '默认',
      data: '/libs/emotions.data'
    },
    'weibo': {
      title: '微博表情',
      data: [
        {
          icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
          value: '[草泥马]'    
        },
        {
          icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
          value: '[神马]'    
        }
      ]    
    }
  };
  
  // 上传图片
  editor.config.uploadImgUrl = '/upload';
  // 隐藏上传网络图片的显示
  editor.config.hideLinkImg = true;

  // 粘贴
  // editor.config.pasteText = true;
  // editor.config.pasteFilter = false;
  
  // 语言
  //editor.config.lang = wangEditor.langs['en'];
  
  // onchange 事件
  editor.onchange = function () {
    console.log(this.$txt.html());
  };

  // 阻止输出提示log
  wangEditor.config.printLog = false;

  editor.create();

});