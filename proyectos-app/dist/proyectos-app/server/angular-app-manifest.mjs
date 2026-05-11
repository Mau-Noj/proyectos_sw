
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1828, hash: '271d198ac76fed37f64a5f634b8c6cf2ae45c8e9b86b8f1128baf58ff1cc2164', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '178d53b3d3ece45f26a1525043ce193b962d43157d3f1f067b345874f2bb2f79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23112, hash: 'e2aa9aee58c840562269e4d11615aef799772db06c75a1015ac102c7c1915ca3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OQEVJGTC.css': {size: 4595, hash: '2WItD8kn+Tg', text: () => import('./assets-chunks/styles-OQEVJGTC_css.mjs').then(m => m.default)}
  },
};
