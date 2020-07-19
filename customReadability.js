(function () {
  const head = document.getElementsByTagName('head')[0];
  const $ = (selector, cb) => {
    const elements = Array.from(document.querySelectorAll(selector));
    for(let el of elements) {
      try {
        cb(el)
      } catch (ex) {
        console.error(`Failed to execute callback for "${selector}" selector(s):`)
        console.error(ex)
      }
    }
    return elements
  }

  // // code highlighter js
  // const script = document.createElement('script');
  // script.type = 'text/javascript';
  // script.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js';
  // head.appendChild(script);
  // // code highlighter css
  // const css = document.createElement('link');
  // css.rel = 'stylesheet';
  // css.href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/default.min.css';
  // head.appendChild(css);
  // // highlight code blocks
  // script.onload = function() {
  //   $('pre code', block => {
  //     hljs.highlightBlock(block);
  //   });
  // }

  // page font
  $(".hentry", el => {
    el.style.maxWidth = "1100px"; 
    el.style.fontFamily = "Delicious"; 
    el.style.lineHeight = "1.2"; 
  })

  // style code blocks
  $("pre, code", codeBlock => {
    codeBlock.style.fontFamily = '"Envy Code R", "Lucida Console", "Courier New", Courier, monospace"';
    codeBlock.style.lineHeight = "1.2"; 
    codeBlock.style.pageBreakInside = 'avoid';
  });

  $(".entry-origin, .entry-meta, .entry-content .navbar, .mr_social_sharing_wrapper", x => {
    if (x.parentNode) {
      x.parentNode.removeChild(x)
    }
  });

  $("a", link => {
    link.style.color = 'rgb(48, 44, 34)';
    link.style.textDecoration = 'none';
  })

  for(let sheet of document.styleSheets) {
    if(sheet.media.mediaText === 'print') {
      sheet.insertRule('table, dd { page-break-before: avoid !important }',1);
      sheet.insertRule('table, h1, h2, h3, h4, h5, h6 { page-break-inside: avoid !important }',1);
      sheet.insertRule('dt, h1, h2, h3, h4, h5, h6 { page-break-after: avoid !important }',1);
    }
  }

  $("img", img => {
    img.style.width = 'auto';
  })
})()
