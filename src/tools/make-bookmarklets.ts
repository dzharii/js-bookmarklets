import fs from 'fs';
import stream from 'stream';
import browserify  from 'browserify';
import { minify }  from 'uglify-js';

const packFlat = require('browser-pack-flat');


let outScriptBundle = '';
let outScriptBundleMin = '';

const bundleStream = browserify({
    entries: './tsbuild/copy-page-title'
   }).plugin(packFlat, { /* options */ })
  .bundle();

  bundleStream.on('data', chunk => {
    //chunk = cleanDefineProperty(chunk);
    let str = String(chunk);
    str = str.replace(/Object\.defineProperty\(\S+?, "__esModule", \{ value: true \}\);/g, '');
    outScriptBundle += str;
  });

  bundleStream.on('end', chunk => {
    const outjs = minify(outScriptBundle);
    console.warn('javascript:' + outjs.code);
  });

