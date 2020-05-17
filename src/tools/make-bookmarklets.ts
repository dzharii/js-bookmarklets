import fs from 'fs';
import stream from 'stream';
import browserify  from 'browserify';
import { minify }  from 'uglify-js';

const packFlat = require('browser-pack-flat');


makeBookmarklet('./tsbuild/bookmarklets/copy-page-title.js', './dist/copy-page-title.txt');




function makeBookmarklet(inFile: string, outFile: string) {
  let minifiedJs = '';
  const bundleStream = browserify({
    entries: inFile
   }).plugin(packFlat, { /* options */ })
  .bundle();

  bundleStream.on('data', chunk => {
    //chunk = cleanDefineProperty(chunk);
    let str = String(chunk);
    str = str.replace(/Object\.defineProperty\(\S+?, "__esModule", \{ value: true \}\);/g, '');
    minifiedJs += str;
  });

  bundleStream.on('end', chunk => {
    const res = minify(minifiedJs);
    if (res.error) {
      console.error(res.error);
      process.exit(-1);
    }

    if (res.warnings) {
      console.warn(res.warnings.join('\n'));
    }
    const outcode = 'javascript:' + res.code;
    fs.writeFileSync(outFile, outcode);
    console.log(`success: ${inFile} -> ${outFile}`);
  });
}
