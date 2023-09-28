const partials = require('@porsche-design-system/components-angular/partials');

// https://github.com/just-jeb/angular-builders/blob/fdd7c8ed00b7eb7e1761aaa6cb5bda41693ceb5d/packages/custom-webpack/README.md#index-transform
// cjs syntax since it is used by `karma.conf.js` for tests, too
module.exports = (targetOptions, indexHtml) => {
  const headPartials = [
    partials.getComponentChunkLinks({ components: ['button', 'marque'] }),
    partials.getInitialStyles(),
    partials.getFontFaceStylesheet(),
    partials.getFontLinks({ weights: ['regular', 'semi-bold', 'bold'] }),
    partials.getIconLinks({ icons: ['arrow-head-right', 'plus'] }),
    partials.getMetaTagsAndIconLinks({ appTitle: 'Sample Integration Angular' }),
  ].join('\n');

  const bodyPartials = [
    partials.getLoaderScript(),
    partials.getCookiesFallbackScript(),
    partials.getBrowserSupportFallbackScript(),
  ].join('\n');

  console.log('Injected partials via transformIndexHtml');

  return indexHtml.replace(/<\/head>/, `\n${headPartials}$&`).replace(/<\/body>/, `\n${bodyPartials}$&`);
};
