// 这里编写自定义js脚本；将被静态引入到页面中
var umamiScript = document.createElement('script');
umamiScript.async = true;
umamiScript.defer = true;
umamiScript.src = 'https://umami.zerotrue.xyz/script.js';
umamiScript.setAttribute('data-website-id', '9fea5bd1-a6f9-43e1-9ed4-2a39ca465129');
document.head.appendChild(umamiScript);
