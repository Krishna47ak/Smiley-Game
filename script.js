
var isFlipped = false;
var firstCard, secondCard ;

const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
    console.log("clicked");
    this.classList.add("flip");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        handleClick()
    }
}
function handleClick() {
    if (firstCard.id == secondCard.id) {
        secondCard = null;
    } else {
        checkIt(firstCard,secondCard)   
    }
}

function checkIt(firstCard,secondCard) {
    if (firstCard.dataset.image == secondCard.dataset.image) {        //dataset
            success();
    } else {
        fail();
    }
}

function success() {
    console.log("success!!");
    firstCard.removeEventListener("click", flip)
    secondCard.removeEventListener("click", flip)
    reset()
}
function fail() {
    console.log("fail!!");
    setTimeout(() => (secondCard.classList.remove("flip") ,firstCard.classList.remove("flip"),reset()) ,700)
}
function reset() {
    [isFlipped,firstCard,secondCard] = [false,null,null]
}
(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index
    })
})();