var path = require('path');
var fs = require('fs');
var uglify = require('uglify-js');
var jade = require('jade');

var bookmarklets = [];

// iterate over js files (except build.js)
var files = fs.readdirSync('.');
for (var i=0; i < files.length; ++i) {
  var file = files[i];
  if(fs.lstatSync(file).isFile() && path.extname(file) === '.js' && path.basename(file) !== 'build.js') {
    var b = { name: path.basename(file) };
    // minfy
    b.code = fs.readFileSync(file).toString();
    b.minified = uglify.minify(b.code, {fromString: true}).code;
    // write minified bookmarklet
    var out = './build/' + b.name;
    if(process.env.DEBUG) {
      console.log(require('util').inspect(b, {colors: true}));
    }
    console.log('writing:', out);
    fs.writeFileSync(out, b.minified);
    bookmarklets.push(b);
  }

  // build html file
  var html = jade.renderFile('index.jade', {bookmarklets: bookmarklets});
  fs.writeFileSync('./build/index.html', html);
}


