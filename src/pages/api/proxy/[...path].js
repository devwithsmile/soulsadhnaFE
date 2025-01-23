import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'https://soulsadhnabe.onrender.com',
  changeOrigin: true,
  pathRewrite: { '^/api/proxy': '/api' }, // Rewrite path if needed
});

export default function handler(req, res) {
  return proxy(req, res);
}
