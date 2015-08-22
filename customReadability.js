(function () {
  var article = document.querySelector(".hentry");
  article.style.maxWidth = "920px"; 
  article.style.fontFamily = "Delicious"; 
  article.style.lineHeight = "1.2"; 
  var pres = document.querySelectorAll("pre, code");
  for (var i=0; i < pres.length; ++i) {
    pres[i].style.fontFamily = '"Envy Code R", "Lucida Console", "Courier New", Courier, monospace"';
    pres[i].style.lineHeight = "1.2"; 
  }
})()
