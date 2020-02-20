
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use('/api.darksy', createProxyMiddleware({ target: 'https://api.darksky.net/forecast/83fbb50fcda904a33752ffc002463681/', changeOrigin: true }));
    //app.use(proxy('/api', { target: 'https://api.darksky.net/forecast/83fbb50fcda904a33752ffc002463681/' }));
};
//app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
//app.listen(3000);
