import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

const patchFetchPlugin = (): Plugin => ({
  name: 'patch-fetch-first',
  transformIndexHtml: {
    order: 'pre',
    handler() {
      return [
        {
          tag: 'script',
          attrs: { type: 'text/javascript' },
          children: `(function(){try{var w=typeof window!=="undefined"?window:(typeof globalThis!=="undefined"?globalThis:null);if(!w)return;var _f=typeof w.fetch==="function"?w.fetch.bind(w):null;var gF=function(){return _f};var sF=function(v){_f=v};var c=w;while(c){try{var d=Object.getOwnPropertyDescriptor(c,"fetch");if(d){Object.defineProperty(c,"fetch",{get:gF,set:sF,configurable:true,enumerable:true})}}catch(e){}try{c=Object.getPrototypeOf(c)}catch(e){break}}if(typeof Window!=="undefined"&&Window.prototype){try{Object.defineProperty(Window.prototype,"fetch",{get:gF,set:sF,configurable:true,enumerable:true})}catch(e){}}try{Object.defineProperty(w,"fetch",{get:gF,set:sF,configurable:true,enumerable:true})}catch(e){}}catch(e){}})();`,
          injectTo: 'head-prepend',
        },
      ];
    },
  },
});

export default defineConfig(() => {
  return {
    plugins: [patchFetchPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
