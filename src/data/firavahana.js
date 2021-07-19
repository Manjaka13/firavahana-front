import sections from "./sections";

const firavahana = {
	caption: [
		"Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.",
		"Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.",
	],
	images: [
		{
			image: "./images/firavahana/carte.jpg",
			caption: "Carte de la commune de Firavahana.",
		},
		{
			image: "./images/firavahana/geologie.jpg",
			caption: "Carte géologique de la commune de Firavahana.",
		},
		{
			image: "./images/firavahana/localisation.jpg",
			caption: "Localisation de la commune de Firavahana.",
		},
	],
	sections: [
		{
			name: "Sécurité",
			icon: "fa fa-exclamation-circle",
			caption:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt fugit placeat, doloribus cum asperiores iure illo consequuntur non dolorem, praesentium qui necessitatibus ullam tempore dolore.",
			image: "./images/securite/representation.jpg",
		},
		{
			name: "Infrastructures",
			icon: "fa fa-building",
			caption:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt fugit placeat, doloribus cum asperiores iure illo consequuntur non dolorem, praesentium qui necessitatibus ullam tempore dolore.",
			image: "./images/infrastructures/representation.jpg",
		},
		{
			name: "Mines",
			icon: "fa fa-mountain",
			caption:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt fugit placeat, doloribus cum asperiores iure illo consequuntur non dolorem, praesentium qui necessitatibus ullam tempore dolore.",
			image: "./images/mines/representation.jpg",
		},
	],
	securite: {
		caption: [
			"Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.",
			"Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.",
		],
		images: [
			{
				image: "./images/securite/representation.jpg",
				caption: "La sécurité de la commune.",
			},
			{
				image: "./images/securite/fokotany.jpg",
				caption: "Les fokotany de Firavahana.",
			},
			{
				image: "./images/securite/kizo.jpg",
				caption: "Les Kizo.",
			},
		],
	},
};

function _build_sections_links() {
	let processed_sections = [];
	firavahana.sections.forEach((section) => {
		section.link =
			"#" +
			section.name
				.split("")
				.map((c) => {
					const special_char = [
						"à",
						"ä",
						"â",
						"é",
						"è",
						"ê",
						"ë",
						"ï",
						"ö",
						"ô",
						"ù",
						"û",
						"ü",
					];
					const match = [
						"a",
						"a",
						"a",
						"e",
						"e",
						"e",
						"e",
						"i",
						"o",
						"o",
						"u",
						"u",
						"u",
					];
					c = c.toLowerCase();
					const id = special_char.indexOf(c);
					if (id >= 0 && id < special_char.length) return match[id];
					else return c;
				})
				.join("");
		processed_sections.push(section);
	});
	return processed_sections;
}

firavahana.sections = _build_sections_links();

export default firavahana;
