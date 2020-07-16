class Negociacao {

  constructor(data, quantidade, valor) {

    this._data = new Date(data.getTime()); // cria uma nova instância
    this._quantidade = quantidade;
    this._valor = valor;

    Object.freeze(this);
  }

  // Getters
  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime()); // retorna uma nova instância
  }
  
  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

}