import "./styles/index.scss";
import sections from "./data/sections.js";
import developers from "./data/developers.js";
import fenoarivobe from "./data/fenoarivobe.js";
import firavahana from "./data/firavahana.js";
import securite from "./data/securite.js";

(function () {
	const app = new Vue({
		el: "#app",
		data: {
			sections: [...sections],
			developers: [...developers],
			fenoarivobe: { ...fenoarivobe },
			firavahana: { ...firavahana },
			securite: [...securite],
			securite_min: [],
			zazamainty_fullList: false,
			shown_slider: -1,
			shown_slider_caption: "",
			slider_class: [],
			swiper: null,
			fokotany_fullList: false,
			fokotany_min: [],
		},
		mounted: function () {
			for (let i = 0; i < 10; i++) this.slider_class.push("slider");
			for (let i = 0; i < 3; i++) this.securite_min.push(this.securite[i]);
			for (let i = 0; i < this.firavahana.fokotany.liste.length; i++) {
				const style = `background: url(${this.firavahana.fokotany.liste[i].image}) center center no-repeat; background-size: cover;`;
				if (i < 5) {
					this.fokotany_min.push(this.firavahana.fokotany.liste[i]);
					this.fokotany_min[this.fokotany_min.length - 1].style = style;
				}
				this.firavahana.fokotany.liste[i].style = style;
			}
			//Create cover map
			const map = L.map("map").setView([-18.6277, 46.8858528], 12);
			L.tileLayer(
				"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
				{
					attribution:
						'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
					maxZoom: 18,
					id: "mapbox/streets-v11",
					tileSize: 512,
					zoomOffset: -1,
					accessToken:
						"pk.eyJ1IjoibWFuamFrYSIsImEiOiJja244eXl6ajIwZjFzMnZwZDUydHdsaDc5In0.4EKbUngpTtrw96ktIaf6JA",
				}
			).addTo(map);
			L.polygon(this.firavahana.limites, {
				weight: 3,
				fillOpacity: 0.4,
			})
				.addTo(map)
				.bindPopup("<p class='bold'>Firavahana</p>");
		},
		methods: {
			show_zazaMaintyFullList() {
				this.zazamainty_fullList = true;
			},
			hide_zazaMaintyFullList() {
				this.zazamainty_fullList = false;
			},
			show_fokotanyFullList() {
				this.fokotany_fullList = true;
			},
			hide_fokotanyFullList() {
				this.fokotany_fullList = false;
			},
			show_slider(id, caption, swiper_class, initial) {
				if (typeof id === "number" && id >= 0) {
					if (typeof caption === "string" && caption.length > 0) {
						this.shown_slider = id;
						this.slider_class[this.shown_slider] = "slider--active";
						this.shown_slider_caption = caption;
						this.swiper_create(swiper_class, initial);
					}
				}
			},
			hide_slider() {
				this.slider_class[this.shown_slider] = "slider";
				this.shown_slider = -1;
				this.shown_slider_caption = "";
				this.swiper_destroy();
			},
			swiper_create(swiper_class, initial) {
				setTimeout(() => {
					this.swiper = new Swiper(swiper_class, {
						effect: "cube",
						grabCursor: true,
						cubeEffect: {
							shadow: false,
							slideShadows: false,
							shadowOffset: 20,
							shadowScale: 0.94,
						},
						initialSlide: initial,
						pagination: {
							el: swiper_class + " .swiper-pagination",
							clickable: true,
							renderBullet: (index, className) => {
								return '<span class="' + className + '">' + (index + 1) + "</span>";
							},
						},
					});
				}, 5);
			},
			swiper_destroy() {
				if (this.swiper) {
					this.swiper.destroy();
					this.swiper = null;
				}
			},
		},
	});
})();
