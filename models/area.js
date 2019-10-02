class Area{
	constructor(nombre, color, areas = []) {
		this._nombre = nombre
		this._color = color
		this._areas = areas
	}

	get nombre() { return this._nombre }
	get areas() { return this._areas }
	get color() { return this._areas }
}

module.exports = Area
