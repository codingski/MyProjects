const fetch = require("node-fetch");
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

async function mean(str) {
let encoded = encodeURI(`https://stdict.korean.go.kr/api/search.do?key=B9AD976BEF90C5480E6E59EAEE69E6FB&q=${str}&method=exact`);
fetch(encoded)
  .then(function(response) {
    return response.text();
  })
  .then(str => parser.parseString(str, function(err, result) {
      let ArrayToString = String(result.channel.item[0].sense[0].definition);
      return ArrayToString;
  }));
};

let a = mean('감자')
setTimeout(()=>{
  console.log(a);
}, 5000)
