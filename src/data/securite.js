const securite = [
	{
		name: "Jean Deronie",
	},
	{
		name: "Nirintsoa Petera",
	},
	{
		name: "Patrick Jean Paul",
	},
	{
		name: "Rabearivony Fidinirina",
	},
	{
		name: "Rabearimanana Jean Bernard",
	},
	{
		name: "Rabemananjara Josoa",
	},
];

const _build_path = () => {
	return securite.map((p) => {
		p.image = `./images/securite/zaza mainty/${p.name.toLowerCase()}.jpg`;
		return p;
	});
};

export default _build_path(securite);
