(function () {
  var article = document.querySelector(".hentry");
  article.style.maxWidth = "920px"; 
  article.style.fontFamily = "Delicious"; 
  article.style.lineHeight = "1.2"; 
  var pres = document.querySelectorAll("pre, code");
  for (var i=0; i < pres.length; ++i) {
    pres[i].style.fontFamily = '"Envy Code R", "Lucida Console", "Courier New", Courier, monospace"';
    pres[i].style.lineHeight = "1.2"; 
    pres[i].style.pageBreakInside = 'avoid';
  }
  var toRemove = document.querySelectorAll(".entry-origin, .entry-meta, .entry-content .navbar");
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
