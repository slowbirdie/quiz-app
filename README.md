# quiz-app

## ✨ 新特性
- **支持五种题型**：单选题、多选题、判断题、填空题、编程/简答题
- 自适应 iframe 高度，方便嵌入博客
- 自动判题 + 正确自动跳转，错误则手动下一题
- 填空题支持同义多答案，编程题智能化关键词匹配

## 1. 将以下代码插入到自己Hexo博客主题的渲染文章的引擎文件中，如***post.ejs***
```JavaScript
<!-- ========== 在这里插入 iframe 自适应脚本 ========== -->
<script>
(function() {
  function resizeIframe() {
    const iframes = document.querySelectorAll('iframe[src*="quiz.slowbirdie.top"]');
    iframes.forEach(iframe => {
      try {
        iframe.contentWindow.postMessage({ type: 'getHeight' }, '*');
      } catch(e) { /* 忽略跨域错误 */ }
    });
  }
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'setHeight' && event.data.height) {
      const iframes = document.querySelectorAll('iframe[src*="quiz.slowbirdie.top"]');
      iframes.forEach(iframe => {
        if (iframe.contentWindow === event.source) {
          iframe.style.height = event.data.height + 'px';
        }
      });
    }
  });
  window.addEventListener('load', resizeIframe);
  window.addEventListener('resize', resizeIframe);
})();
</script>
<!-- ========== 脚本结束 ========== -->
```

## 2. 在markdown文章中加入以下代码即可嵌入对应功能
```JavaScript
<iframe 
  src="https://quiz.slowbirdie.top?embed=true" 
  width="100%" 
  height="560" 
  frameborder="0" 
  scrolling="no"
  style="border: none; max-width: 700px; display: block; margin: 20px auto; border-radius: 28px; box-shadow: 0 8px 20px rgba(0,0,0,0.05);">
</iframe>
```
