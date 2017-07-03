var rp = require('request-promise');
var cheerio = require('cheerio');
var toMarkdown = require('to-markdown');

var options = {
    uri: 'http://www.jianshu.com/p/67ffde41150d',
    transform: (body) => {
        return cheerio.load(body);
    }
};

rp(options)
    .then( ($) => {
        console.log($('h1.title').text());
        console.log('===');
        console.log(toMarkdown($('div.show-content').html()));
    })
    .catch(err => {
        //
    });
