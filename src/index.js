import "./styles/styles";
import "./modules/demo4";
import 'owl.carousel';

import abilities from "./modules/isotope.js";

(function() {
	if("serviceWorker" in navigator) {
		navigator.serviceWorker.register( "service-worker.js" )
	}
})();
