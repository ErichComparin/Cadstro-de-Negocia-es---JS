class DateHelper {
  
  constructor() {
    
    throw new Error('Classe não pode ser instanciada');
  }
  
  static dataParaTexto(data) {

    return `${
      data.getDate()
        .toString()
        .padStart(2, '0')
    }/${
      (data.getMonth() + 1)
        .toString()
        .padStart(2, '0')
    }/${
      data.getFullYear()
    }`;
  }
  
  static textoParaData(texto) {
    
    if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
      throw new Error('Formato da data inválido, deve ser aaaa-mm-dd');
    
    return new Date(...texto // "..." = spread operator
      .split('-')
      .map((item, indice) => indice == 1 ? item -1 : item)); // "=>" = arrow function);
  }

}