import "/assets/global/global";
import indexPage from "./index";


(function () {
    function init() {
        try {
            try {
                indexPage.renderPage();
            } catch(err) {
                throw err;
            }
        } catch(err) {
            // remove
            throw err;
        }
    }
   init();
})();
