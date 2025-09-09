let nomeDoUsuario = prompt("digite seu nome completo").toLowerCase()
let idade =parseInt(prompt("digite sua idade "))
if (idade >= 18){
    alert(`ola ${nomeDoUsuario}! voce tem acesso completo. Boas vindas a plataforma!`)
}else if( nomeDoUsuario === "admin"){
    alert(`bem vindo,${nomeDoUsuario} acesso total liberado.`)
}else if( nomeDoUsuario === "moderador" && idade >= 16){
    alert(`ola ${nomeDoUsuario} voce tem acesso a area de moderaçao`)
}else if(idade >=13 || idade <=17){
    alert("negado. voce pode participar do nosso programa jovem aprendiz!")
}else{
    alert("acesso negado.o conteudo e exclusivo para maiores de 18 anos")
}
