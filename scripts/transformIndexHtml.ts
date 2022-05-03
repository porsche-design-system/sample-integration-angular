import type { TargetOptions } from '@angular-builders/custom-webpack';
import * as partials from '@porsche-design-system/components-angular/partials';
import * as notificationPartials from '@porsche-design-system/browser-notification';

export default (targetOptions: TargetOptions, indexHtml: string): string => {
  const headPartials = [
    partials.getComponentChunkLinks({ components: ['button', 'marque'] }),
    partials.getInitialStyles({
      // @ts-ignore
      skeletonTagNames: [
        'p-button',
        'p-button-pure',
        'p-checkbox-wrapper',
        'p-fieldset-wrapper',
        'p-link',
        'p-link-pure',
        'p-radio-button-wrapper',
        'p-select-wrapper',
        'p-textarea-wrapper',
        'p-text-field-wrapper',
      ],
    }),
    partials.getFontFaceStylesheet(),
    partials.getFontLinks({ weights: ['regular', 'semi-bold'] }),
    partials.getIconLinks({ icons: ['arrowHeadRight', 'plus'] }),
    partials.getMetaTagsAndIconLinks({ appTitle: 'Sample Integration Angular' }),
  ].join('\n');

  const bodyPartials = [
    partials.getLoaderScript(),
    notificationPartials.includeBanner(),
    notificationPartials.includeCookieOverlay(),
    notificationPartials.includeOverlay(),
  ].join('\n');

  return indexHtml.replace(/(<\/head>)/, `\n${headPartials}$1`).replace(/(<\/body>)/, `\n${bodyPartials}$1`);
};
