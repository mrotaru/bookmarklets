(function () {
  var article = document.querySelector(".hentry");
  article.style.maxWidth = "920px"; 
  article.style.fontFamily = "Delicious"; 
  var pres = document.querySelectorAll("pre");
  for (var i=0; i < pres.length; ++i) {
    pres[i].style.fontFamily = '"Envy Code", "Lucida Console", "Courier New", Courier, monospace"';
  }
})()
