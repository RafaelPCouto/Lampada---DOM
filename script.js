let lamp = document.getElementById('lamp')

const turnOn = () => lamp.src = "images/on.svg";

const turnOff = () => lamp.src = 'images/off.svg';

// Importante destacar:
// Ao utilizar a palavra chave function, o JS lê a funcão com o comportamento de 'hoisting', ou seja, a função, é interpretada como se tivesse escrita no topo da página. Sendo assim, o algoritmo não é impedido de funcionar caso um evento declarado antes utilize a função.
// Por outro lado, a arrow function não possui esse tipo de comportamento, sua interpretação vai se assemelhar ao de uma variável, sendo necessária a sua construção antes de qualquer interação com a mesma.

const lampBreak = () => lamp.src = 'images/broke.svg'

lamp.addEventListener('click', lampBreak)


// function lampBreak() {
//     lamp.src = 'images/broke.svg'
// }