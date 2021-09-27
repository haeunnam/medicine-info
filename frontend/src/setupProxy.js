const { createProxyMiddleware } = require("http-proxy-middleware");

const url = "http://localhost:8080";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};
