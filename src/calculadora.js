function somarDoisNumeros(valor1, valor2){
    //1.Somar dois números
    const resultado = valor1 + valor2;
    return resultado;

}

function calcularMediaDeDoisNumeros(valor1, valor2){
    //1. Soma todos os valores
    const resultadoSomaDeDoisValores =somarDoisNumeros(valor1, valor2);

    //2. Divide pela quantidade de números passados
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;

    //3. Exibe o resultado
    return resultadoDaMediaDeDoisValores;

}

module.exports = {
    somarDoisNumeros
}