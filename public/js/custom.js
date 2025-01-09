// 这里编写自定义js脚本；将被静态引入到页面中
var umamiScript = document.createElement('script');
umamiScript.async = true;
umamiScript.defer = true;
umamiScript.src = 'https://umami.zerotrue.xyz/script.js';
umamiScript.setAttribute('data-website-id', '04093dce-a621-4766-8ea3-4d1cec770a0a');
document.head.appendChild(umamiScript);
