function calculadora(){
    let num1=parseFloat(prompt('Digite um número: '))
    let op=prompt('Digite o operador: ')
    let num2=parseFloat(prompt('Digite outro número: '))
    console.log(num1, op, num2)

    try {
        if (isNaN(num1) && isNaN(num2)) throw 'Ação invalida, por favor digite um número.' ;
        else if ((op!='+') && (op!='-') && (op!='*') && (op!='/')) throw 'Operação inválida.' ; 
    } catch (error) {
        alert (error)
    }

    if (op=='+'){
        let resultado=num1+num2
        alert('O resultado da soma é: ' + resultado)
    }
    else if (op=='-'){
        let resultado=num1-num2
        alert('O resultado da subtração é: ' + resultado)
    } 
    else if (op=='/') {
        let resultado=num1/num2
            alert('O resultado da divisão é: ' + resultado)
        if (num2=='0'){
            alert('Número inválido para divisão.')
        } 
    }
    else if (op=='*'){
        let resultado=num1*num2
        alert('O resultado da subtração é: ' + resultado)
    }
    else {
        alert('Operação invalida.')
    }

}

calculadora()