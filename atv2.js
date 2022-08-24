function enviar (){
    let nome=prompt('Nome')
    let email=prompt('E-mail')
    let numero=prompt('Número de telefone')
    let profissao=prompt('Profissão')

    var lista=[nome, email, numero, profissao]
    console.log(lista[0], lista [1], lista [2], lista [3])

}
enviar()