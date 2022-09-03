// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import './src/css/milligram.css'
import './src/css/darkmode.css'
import './src/css/navigation.css'

export const onServiceWorkerUpdateReady = () => window.location.reload();
