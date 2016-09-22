/*
* @Author: Jiang Guoxi
* @Date:   2016-09-22 17:59:56
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-22 18:20:34
*/

var fs = require('fs');
var path = require('path');
var ex = '/examples/';
var DIR = path.join(__dirname, ex);

var genli = function (link, name) {
  return ('<li><a href = ".' + ex + link + '">' + name + '</li>');
};
var genHtml = function (html) {
  return "<!DOCTYPE html>" +
  "<html lang='en'>" +
  "<head>" +
    "<meta charset='UTF-8'>" +
    "<title>You Don't Need JavaScript</title>" +
  "</head>" +
  "<body>" +
  html +
  "</body>" +
  "</html>";
};
var html = '<ul>';
fs.readdirSync(DIR).forEach(function (item) {
  var file = path.join(DIR, item);
  var basename = path.parse(file).name;
  html += genli(item, basename);
});
html += '</ul>';
var s = genHtml(html);
fs.writeFile('./index.html', s);

