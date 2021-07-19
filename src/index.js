import "./styles/index.scss";
import sections from "./data/sections.js";
import developers from "./data/developers.js";
import fenoarivobe from "./data/fenoarivobe.js";
import firavahana from "./data/firavahana.js";
import securite from "./data/securite.js";

(function () {
	new Vue({
		el: "#app",
		data: {
			sections: [...sections],
			developers: [...developers],
			fenoarivobe: { ...fenoarivobe },
			firavahana: { ...firavahana },
			securite: [...securite],
			securite_min: [],
			zazamainty_fullList: false,
		},
		mounted: function () {
			for (let i = 0; i < 3; i++) this.securite_min.push(this.securite[i]);
		},
		methods: {
			show_zazamaintyFullList() {
				this.zazamainty_fullList = true;
			},
			hide_zazamaintyFullList() {
				this.zazamainty_fullList = false;
			},
		},
	});
})();
