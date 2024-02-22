function soloNumeros(array) {
    soloNumeros([1, "henry", 2])
 
    return array.filter(elemento => Number.isInteger(elemento));
  }
  
  
  // No modifiques nada debajo de esta linea //
 
//module.exports = soloNumeros