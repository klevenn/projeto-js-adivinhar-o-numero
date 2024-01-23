alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// equanto chute nao for igual a n.s
while(chute !=numeroSecreto){
    chute = prompt('Escolha um numero entre 1 a 10');
// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
} else {
    if(chute>numeroSecreto){
        alert(`o número secreto é menor que ${chute}`);   
    } else{
        alert(`o número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
}
}
let palavraTentativa= tentativas >1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas>1){
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//else{
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}