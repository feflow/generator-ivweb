import "/assets/global/global";
import indexPage from "./index";


(function () {
    function init() {
        try {
            indexPage.renderPage();
        } catch(err) {
            throw err;
        }
    }
   init();
})();
