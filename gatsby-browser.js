/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "typeface-raleway";
import "typeface-catamaran";
import "typeface-satisfy";
import "typeface-open-sans";

export const onServiceWorkerUpdateReady = () => {
    window.location.reload()
  }
