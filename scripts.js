//Variáveis Globais.
let imgAttribute;
let cardsClicked = 0;
let card1;
let card2; 
let arrayCards = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
let gifArray = [];
let moves = 0;
let winCount = 0;
let time = 0;
let timeId;
let seconds = 0;
let minutes = 9;
let timeFinal = 0;

//Pergunta ao jogador com quantas cartas ele quer jogar, entre 4 a 14.
function play(){
    const cards = Number(prompt("Escolha 4, 6, 8, 10, 12 ou 14 cartas para jogar!"));
    if (cards === 4 || cards === 6 || cards === 8 || cards === 10 || cards === 12 || cards === 14){
        arrayRandom(arrayCards);
        gifArray = arrayCards.slice(0, cards/2);
        gifArray = gifArray.concat(gifArray);
        arrayRandom(gifArray);
        nextPage();
        for (let i = 0; i < gifArray.length; i++){
            if (i < cards/2){
                document.querySelector(".superior").innerHTML += `            <div class="card class${i}" onclick="flip(this)" card="${i}">
                <img src="Images/front.png" />
              </div>`;
            }else if (i < cards){
                document.querySelector(".inferior").innerHTML += `            <div class="card class${i}" onclick="flip(this)" card="${i}">
                <img src="Images/front.png" />
              </div>`;
            }
        }
        timeCount()
    }else{
        play();
    }
}

function timeCount(){
    timeId = setInterval(function(){timeLapse()}, 1000)
}

function timeLapse(){
    time++
        seconds = time%60;
    if (time%60 ===0 ){
        minutes++
    }
    if ((seconds < 10) && (minutes < 10)){
        document.querySelector(".timer").innerHTML = `0${minutes}:0${seconds}`;
        timeFinal = `0${minutes}:0${seconds}`;
    }else if((seconds >= 10) && (minutes < 10)){
        document.querySelector(".timer").innerHTML = `0${minutes}:${seconds}`;
        timeFinal = `0${minutes}:${seconds}`;
    }else if((seconds < 10) && (minutes >= 10)){
        document.querySelector(".timer").innerHTML = `${minutes}:0${seconds}`;
        timeFinal = `${minutes}:0${seconds}`;
    }
    else if((seconds >= 10) && (minutes >=10)){
        document.querySelector(".timer").innerHTML = `${minutes}:${seconds}`;
        timeFinal = `${minutes}:${seconds}`;
    }
}

function arrayRandom(element){
    element = element.sort(compair);
}

function compair(){
    return Math.random() - 0.5;
}

//Remove os contéudos da página inicial
function nextPage(){
    document.querySelector("h2").classList.toggle("noContents")
    document.querySelector(".contents").classList.toggle("noContents");
    document.querySelector("button").classList.toggle("noContents");
    document.querySelector(".img1").classList.toggle("noContents");
    document.querySelector(".img2").classList.toggle("noContents");
    document.querySelector(".img3").classList.toggle("noContents");
    document.querySelector(".img4").classList.toggle("noContents");
    document.querySelector(".img5").classList.toggle("noContents");
    document.querySelector(".img6").classList.toggle("noContents");
    document.querySelector(".img7").classList.toggle("noContents");
    document.querySelector(".quit").classList.toggle("noContents");
    document.querySelector(".timer").classList.toggle("noContents");
    arrayCards = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
    document.querySelector(".superior").innerHTML = ``;
    document.querySelector(".inferior").innerHTML = ``;
    time = 0;
    moves = 0;
    winCount = 0;
    seconds =0;
    minutes = 0;
    clearInterval(timeId)
}

//A função flip adiciona a classe cardSelect correspondente à carta, e atribui a variavel imgAttribute o elemento img correspondente.
function flip(card) {
    card.classList.add(`cardSelected${cardsClicked+1}`)
    imgAttribute = document.querySelector(`.cardSelected${cardsClicked+1}`).querySelector("img");
//Adiciona a classe flipped à div e chama a função gifImg para substituir a fonte da imagem da carta.
    if (!card.classList.contains("flipped")) {
        moves++
        card.classList.add("flipped");
        setTimeout(function(){cardBack(card)}, 300);
        cardsClicked++;
    }
}

//Substitui a fonte da imagem da carta e atribui o elemento alterado ao card1 e card2, para então chamar a função compares.
function cardBack(element) {
    imgAttribute.setAttribute("src", `/Images/${gifArray[element.getAttribute("card")]}`);
    if (cardsClicked === 1){
        document.querySelector(".block").classList.remove("noContents")
        setTimeout(function(){unlock()}, 500);
        card1 = imgAttribute.src;
    }
    if (cardsClicked === 2){
        card2 = imgAttribute.src;
        cardsClicked = 0;
        compares();
    }
}

function unlock(){
    document.querySelector(".block").classList.add("noContents");
}

//Devolve a fonte da frente da imagem da carta.
function cardFront(element1, element2) {
    element1.setAttribute("src", "/Images/front.png");
    element2.setAttribute("src", "/Images/front.png");
}

function classClearSelect(){
    document.querySelector(`.cardSelected1`).classList.remove("cardSelected1");
    document.querySelector(`.cardSelected2`).classList.remove("cardSelected2");
}

function classClearFlip(){
    document.querySelector(`.cardSelected1`).classList.remove("flipped");
    document.querySelector(`.cardSelected2`).classList.remove("flipped");
}
//Compara card1 e card2 se forem iguais retorna as cartas para baixo. Caso contrário as permanece viradas pra cima. Zera cardsCLicked.
function compares(){
    if (card1 !== card2){
        document.querySelector(".block").classList.remove("noContents")
        setTimeout(function(){unlock()}, 1900);
        setTimeout(function() {cardFront(document.querySelector(`.cardSelected1`).querySelector("img"), document.querySelector(`.cardSelected2`).querySelector("img"))}, 800);
        setTimeout(function() {classClearFlip()}, 850);
        setTimeout(function() {classClearSelect()}, 850);
    }else{
        document.querySelector(".block").classList.remove("noContents")
        setTimeout(function(){unlock()}, 900);
        classClearSelect();
        winCount++;
    }
    if (winCount === gifArray.length/2){
        alert(`Você venceu em ${moves} jogadas! \nSeu tempo foi: ${timeFinal}!`)
        resetGame();
    }
}

function resetGame(){
    let newGame = prompt("Você quer jogar uma nova partida?  (sim/não)")
    if (newGame === "sim"){
        nextPage();
        play();
    } else if (newGame === "não"){
        nextPage();
    }else{
        resetGame()
    }
}

