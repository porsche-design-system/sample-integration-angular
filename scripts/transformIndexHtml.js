const partials = require('@porsche-design-system/components-angular/partials');

module.exports = (targetOptions, indexHtml) => {
  const headPartials = [
    partials.getComponentChunkLinks({ components: ['button', 'marque'] }),
    partials.getInitialStyles({}),
    partials.getFontFaceStylesheet(),
    partials.getFontLinks(),
    partials.getIconLinks({ icons: ['arrow-head-right', 'plus'] }),
    partials.getMetaTagsAndIconLinks({ appTitle: 'Sample Integration Angular' }),
  ].join('\n');

  const bodyPartials = [
    partials.getLoaderScript(),
    partials.getCookiesFallbackScript(),
    partials.getBrowserSupportFallbackScript(),
  ].join('\n');

  return indexHtml.replace(/(<\/head>)/, `\n${headPartials}$1`).replace(/(<\/body>)/, `\n${bodyPartials}$1`);
};
