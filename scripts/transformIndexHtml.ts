import type { TargetOptions } from '@angular-builders/custom-webpack';
import * as pdsPartials from '@porsche-design-system/components-angular/partials';
import * as notificationPartials from '@porsche-design-system/browser-notification';
import * as phnPartials from '@porschehn/navigation/dist/porsche-navigation/partials';

export default (targetOptions: TargetOptions, indexHtml: string): string => {
  const headPartials = [
    pdsPartials.getComponentChunkLinks({ components: ['button', 'marque'] }),
    pdsPartials.getInitialStyles({
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
    pdsPartials.getFontFaceStylesheet(),
    pdsPartials.getFontLinks({ weights: ['regular', 'semi-bold'] }),
    pdsPartials.getIconLinks({ icons: ['arrowHeadRight', 'plus'] }),
    pdsPartials.getMetaTagsAndIconLinks({ appTitle: 'Sample Integration Angular' }),
    phnPartials.partials(),
  ].join('\n');

  const bodyPartials = [
    pdsPartials.getLoaderScript(),
    notificationPartials.includeBanner(),
    notificationPartials.includeCookieOverlay(),
    notificationPartials.includeOverlay(),
  ].join('\n');

  return indexHtml.replace(/(<\/head>)/, `\n${headPartials}$1`).replace(/(<\/body>)/, `\n${bodyPartials}$1`);
};
