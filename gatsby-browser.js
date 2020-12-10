// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "fontsource-marck-script"
import "fontsource-catamaran"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"
import "./src/halfmoon-variables.css"

export const onServiceWorkerUpdateReady = () => {
    window.location.reload()
  }
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location && location.state)
    location.state.referrer = prevLocation ? prevLocation.pathname : null
}
