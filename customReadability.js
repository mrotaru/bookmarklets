(function () {
  var head = document.querySelector("head");
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js';
  script.onload = function() {
    console.log('LOADED');
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
  head.appendChild(script);

  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/default.min.css';
  head.appendChild(css);

  var article = document.querySelector(".hentry");
  article.style.maxWidth = "1100px"; 
  article.style.fontFamily = "Delicious"; 
  article.style.lineHeight = "1.2"; 
  var pres = document.querySelectorAll("pre, code");
  for (var i=0; i < pres.length; ++i) {
    pres[i].style.fontFamily = '"Envy Code R", "Lucida Console", "Courier New", Courier, monospace"';
    pres[i].style.lineHeight = "1.2"; 
    pres[i].style.pageBreakInside = 'avoid';
  }
  var toRemove = document.querySelectorAll(".entry-origin, .entry-meta, .entry-content .navbar, .mr_social_sharing_wrapper");
  for (var i=0; i < toRemove.length; ++i) {
    if (toRemove[i].parentNode) {
      toRemove[i].parentNode.removeChild(toRemove[i]);
    } 
  }
  var links = document.querySelectorAll("a");
  for (var i=0; i < links.length; ++i) {
    links[i].style.color = 'rgb(48, 44, 34)';
    links[i].style.textDecoration = 'none';
  }
  var sheets = document.styleSheets;
  for (var i=0; i < sheets.length; ++i) {
    if(sheets[i].media.mediaText === 'print') {
      sheets[i].insertRule('table, dd { page-break-before: avoid !important }',1);
      sheets[i].insertRule('table, h1, h2, h3, h4, h5, h6 { page-break-inside: avoid !important }',1);
      sheets[i].insertRule('dt, h1, h2, h3, h4, h5, h6 { page-break-after: avoid !important }',1);
    }
  }
  var imgs = document.querySelectorAll('img');
  for (var i=0; i < imgs.length; ++i) {
    imgs[i].style.width = 'auto';
  }
})()
