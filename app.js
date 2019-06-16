var http = require("https");

var options = {
  "method": "GET",
  "hostname": [
    "api",
    "paystack",
    "co"
  ],
  "path": [
    "bank",
    "resolve"
  ],
  "headers": {
    "Authorization": pk_test_966d59c57b7e69cc18de081de185ccbdc689e801,
    "Cache-Control": "no-cache",
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();