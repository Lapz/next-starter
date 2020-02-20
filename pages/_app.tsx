/**
 * The top level of the application.
 * This is where any __GLOBAL__ CSS is imported only !!!
 * You really shouldn't be modifying this so if you are think carefully
 */

import "normalize.css/normalize.css"
import "bulma/css/bulma.css"
import "../assets/css/index.css"

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
