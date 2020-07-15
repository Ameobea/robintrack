const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static(__dirname)); // serve static files from cwd

function getIpFromReq(req) {
  // get the client's IP address
  var bareIP =
    ':' +
    ((req.connection.socket && req.connection.socket.remoteAddress) ||
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      '');
  return (bareIP.match(/:([^:]+)$/) || [])[1].split(',')[0] || '127.0.0.1';
}

// proxying requests from /analytics to www.google-analytics.com.
app.use(
  '/',
  proxy('www.google-analytics.com', {
    https: true,
    proxyReqPathResolver: function (req) {
      const ip = getIpFromReq(req);
      console.log(ip);
      const proxiedURL =
        '/j' +
        req.url.replace('_collect', 'collect') +
        (req.url.indexOf('?') === -1 ? '?' : '&') +
        'uip=' +
        encodeURIComponent(ip);
      return proxiedURL;
    },
  })
);

app.listen(1280);
console.log('Web application ready on http://localhost:1280');
