var path = require('path');
var fs = require('fs');
var uglify = require('uglify-js');
var jade = require('jade');

// Compile a function

var files = fs.readdirSync('.');
var bookmarklets = [];

// iterate over js files (except build.js)
for (var i=0; i < files.length; ++i) {
  var file = files[i];
  if(fs.lstatSync(file).isFile() && path.extname(file) === '.js' && path.basename(file) !== 'build.js') {
    var b = { name: path.basename(file) };
    // minfy, compress
    b.code = fs.readFileSync(file).toString();
    b.minified = uglify.minify(b.code, {fromString: true}).code;
    // write file
    var out = './build/' + b.name;
    if(process.env.DEBUG) {
      console.log(require('util').inspect(b, {colors: true}));
    }
    console.log('writing:', out);
    fs.writeFileSync(out, b.minified);
    bookmarklets.push(b);
  }

  // build html file
//  var template = fs.readFileSync('index.jade').toString();
  var html = jade.renderFile('index.jade', {bookmarklets: bookmarklets});
  fs.writeFileSync('./build/index.html', html);
}


