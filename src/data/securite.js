const securite = [
	{
		name: "Jean Deronie",
		zaza_mainty: true,
		phone: "+261(0) 34 16 129 19",
	},
	{
		name: "Nirintsoa Petera",
		zaza_mainty: true,
		phone: "+261(0) 34 16 129 19",
	},
	{
		name: "Patrick Jean Paul",
		zaza_mainty: true,
		phone: "+261(0) 34 16 129 19",
	},
	{
		name: "Rabearivony Fidinirina",
		zaza_mainty: false,
		phone: "+261(0) 34 16 129 19",
	},
	{
		name: "Rabearimanana Jean Bernard",
		zaza_mainty: false,
		phone: "+261(0) 34 16 129 19",
	},
	{
		name: "Rabemananjara Josoa",
		zaza_mainty: true,
		phone: "+261(0) 34 16 129 19",
	},
];

const _build_path = () => {
	return securite.map((p) => {
		p.image = `./images/securite/zaza mainty/${p.name.toLowerCase()}.jpg`;
		return p;
	});
};

export default _build_path(securite);
