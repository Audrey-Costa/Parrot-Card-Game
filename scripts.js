//Variáveis Globais.
let imgAttribute;
let cardsClicked = 0;
let card1;
let card2; 

//Pergunta ao jogador com quantas cartas ele quer jogar, entre 4 a 14.
function play(){
    const cards = prompt("Com quantas cartas você quer jogar?")
    if (Number(cards) === 14){
        document.querySelector(".noContents").classList.toggle("noContents")
        document.querySelector("button").classList.toggle("noContents")
        document.querySelector(".img1").classList.toggle("noContents")
        document.querySelector(".img2").classList.toggle("noContents")
        document.querySelector(".img3").classList.toggle("noContents")
        document.querySelector(".img4").classList.toggle("noContents")
        document.querySelector(".img5").classList.toggle("noContents")
        document.querySelector(".img6").classList.toggle("noContents")
        document.querySelector(".img7").classList.toggle("noContents")
    }
}

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
    console.log("1");
    console.log(imgAttribute)
    console.log(cardsClicked)
    if (cardsClicked === 1){
        card1 = imgAttribute.src;
        console.log("2")
    }
    if (cardsClicked === 2){
        card2 = imgAttribute.src;
        console.log("3")
        cardsClicked = 0;
        compares()
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

function classClearSelect(){
    document.querySelector(`.cardSelected1`).classList.remove("cardSelected1");
    document.querySelector(`.cardSelected2`).classList.remove("cardSelected2");
    console.log("OOOOIIII")
}

function classClearFlip(){
    document.querySelector(`.flipped`).classList.remove("flipped");
    document.querySelector(`.flipped`).classList.remove("flipped");
    console.log("OOOOIIII")
}
//Compara card1 e card2 se forem iguais retorna as cartas para baixo. Caso contrário as permanece viradas pra cima. Zera cardsCLicked.
function compares(){
    console.log("fui chamada")
    console.log(card1)
    console.log(card2)
    if (card1 !== card2){
        console.log("a condição foi cumprida");
        setTimeout(function() {cardFront(document.querySelector(`.cardSelected1`).querySelector("img"), document.querySelector(`.cardSelected2`).querySelector("img"))}, 900);
        setTimeout(function() {classClearSelect()}, 905);
        setTimeout(function() {classClearFlip()}, 905);
    }else{
        classClearSelect();

    }

}

