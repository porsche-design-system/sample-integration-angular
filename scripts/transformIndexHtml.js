const partials = require('@porsche-design-system/components-angular/partials');

// https://github.com/just-jeb/angular-builders/blob/fdd7c8ed00b7eb7e1761aaa6cb5bda41693ceb5d/packages/custom-webpack/README.md#index-transform
module.exports = (targetOptions, indexHtml) => {
  const headPartials = [
    partials.getInitialStyles(),
    partials.getFontLinks({ weights: ['regular', 'semi-bold', 'bold'] }),
  ]
    .join('\n')
    .replace(/https:\/\/cdn\.ui\.porsche\.com\/porsche-design-system/g, 'http://localhost:3001');

  const bodyPartials = [partials.getBrowserSupportFallbackScript(), partials.getCookiesFallbackScript()]
    .join('\n')
    .replace(/https:\/\/cdn\.ui\.porsche\.com\/porsche-design-system/g, 'http://localhost:3001');

  console.log('Injected partials via transformIndexHtml');

  return indexHtml.replace(/<\/head>/, `\n${headPartials}$&`).replace(/<\/body>/, `\n${bodyPartials}$&`);
};