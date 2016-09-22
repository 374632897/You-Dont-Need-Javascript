/*
* @Author: Jiang Guoxi
* @Date:   2016-09-22 17:59:56
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-22 18:08:46
*/

var fs = require('fs');
var path = require('path');
var ex = '/examples/';
var DIR = path.join(__dirname, ex);

var genli = function (link, name) {
  return '<li><a href = "' + ex + link + '">' + name + '</li>';
};
// console.log(fs.)
fs.readdirSync(DIR).forEach(function (item) {
  // console.log(fs.fstatsSync(item))
  // var
});
