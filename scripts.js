//Variáveis Globais.
let imgAttribute;
let cardsClicked = 0;
let card1;
let card2; 

//A função flip adiciona a classe cardSelect correspondente à carta, e atribui a variavel imgAttribute o elemento img correspondente.
function flip(card) {
    card.classList.add(`cardSelected${cardsClicked+1}`)
    imgAttribute = document.querySelector(`.cardSelected${cardsClicked+1}`).querySelector("img");
//Adiciona a classe flipped à div e chama a função gifImg para substituir a fonte da imagem da carta.
    if (!card.classList.contains("flipped")) {
        card.classList.add("flipped");
        setTimeout(function(){cardBack()}, 300);
        cardsClicked++


    }
}

//Substitui a fonte da imagem da carta e atribui o elemento alterado ao card1 e card2, para então chamar a função compares.
function cardBack() {
    imgAttribute.setAttribute("src", "/Images/metalparrot.gif");
    console.log("oi");
    if (cardsClicked === 1){
        card1 = imgAttribute.src;
        console.log(card1)
    }
    if (cardsClicked === 2){
        card2 = imgAttribute.src;
        console.log(card2)
        setTimeout(function(){compares()},800)
    }
}

//Devolve a fonte da frente da imagem da carta.
function cardFront(element1, element2) {
    console.log(element1)
    console.log(element2)
    element1.setAttribute("src", "/Images/front.png");
    element2.setAttribute("src", "/Images/front.png");
    console.log(element1)
    console.log(element2)
}

//function cardFront2() {
  //  document.querySelector(`.cardSelected2`).querySelector("img").setAttribute("src", "/Images/front.png");
//
//}

function classClear(){
    document.querySelector(`.cardSelected1`).classList.remove("cardSelected1", "flipped");
    document.querySelector(`.cardSelected2`).classList.remove("cardSelected2", "flipped");
    console.log("OOOOIIII")
}
//Compara card1 e card2 se forem iguais retorna as cartas para baixo. Caso contrário as permanece viradas pra cima. Zera cardsCLicked.
function compares(){
    console.log("fui chamada")
    console.log(card1)
    console.log(card2)
    if (card1 !== card2){
        console.log("a condição foi cumprida");
        setTimeout(function() {cardFront(document.querySelector(`.cardSelected1`).querySelector("img"), document.querySelector(`.cardSelected2`).querySelector("img"))}, 300)
       // setTimeout(function() {cardFront(document.querySelector(`.cardSelected2`).querySelector("img"))}, 300)
        setTimeout(function() {classClear()}, 301);
//        setTimeout(function() {classClear()}, 350);


        cardsClicked = 0;
    }else{
        cardsClicked = 0;
    }

}

