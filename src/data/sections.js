const sections = [
	{
		title: "Fenoarivobe",
		hover: "A propos du district de Fenoarivobe.",
		icon: "fa fa-bookmark",
	},
	{
		title: "Infrastructures",
		hover: "Les infrastructures en place.",
		icon: "fa fa-building",
	},
	{
		title: "Démographie",
		hover: "La population de la commune de Firavahana.",
		icon: "fa fa-user",
	},
	{
		title: "Geologie",
		hover: "Mines et Géologie de la commune de Firavahana.",
		icon: "fa fa-mountain",
	},
];

function _build_sections_links() {
	let processed_sections = [];
	sections.forEach((section) => {
		section.link =
			"#" +
			section.title
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

export default _build_sections_links(sections);
