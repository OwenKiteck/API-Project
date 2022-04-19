// APIproject JavaScript

let number;
let suit;

// selecting every button
const two = document.getElementById(`2`)
const three = document.getElementById(`3`)
const four = document.getElementById(`4`)
const five = document.getElementById(`5`)
const six = document.getElementById(`6`)
const seven = document.getElementById(`7`)
const eight = document.getElementById(`8`)
const nine = document.getElementById(`9`)
const ten = document.getElementById(`10`)
const jack = document.getElementById(`j`)
const queen = document.getElementById(`q`)
const king = document.getElementById(`k`)
const ace = document.getElementById(`a`)

const club = document.getElementById(`club`)
const heart = document.getElementById(`heart`)
const diamond = document.getElementById(`diamond`)
const spade = document.getElementById(`spade`)

two.onclick = () => {
    number = `2`
    console.log(number)
};
three.onclick = () => number = `3`;
four.onclick = () => number = `4`;
five.onclick = () => number = `5`;
six.onclick = () => number = `6`;
seven.onclick = () => number = `7`;
eight.onclick = () => number = `8`;
nine.onclick = () => number = `9`;
ten.onclick = () => number = `10`;
jack.onclick = () => number = `J`;
queen.onclick = () => number = `Q`;
king.onclick = () => number = `K`;
ace.onclick = () => number = `A`;

club.onclick = () => suit = `C`;
heart.onclick = () => suit = `H`;
diamond.onclick = () => suit = `D`;
spade.onclick = () => suit = `S`;



// When the Guess button is clicked
const guess = document.getElementById(`guess`)

guess.onclick = () => {
    const yourCard = document.getElementById(`your-card-area`)
    const area = document.querySelectorAll(`#your-card-area *`)
    for (items of area){
        items.remove();
    }
    console.dir(area)


    let imageLink;
    // console.log(`It works`);
    if (number != undefined && suit != undefined){
        async function getCard(){
            try {
                // Below finds the card the person picked in the stack and returns it 
                const card = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
                const cardArray = card.data.cards;
                console.log(cardArray);
                for (item of cardArray){
                    if (item.code === number + suit){
                        imageLink = item.image;
                        console.log(imageLink);
                    }
                }

                // Below will put the image and text into the html file
                const image = document.createElement(`img`)
                image.src = imageLink;
                const isThisIt = document.createElement(`h1`)
                isThisIt.innerText = `~ Is this your card? ~`;

                yourCard.append(isThisIt, image)
                
        
            } catch (err) {
                console.log(err);
            }
        }
        getCard()
    } else {
        const tryAgain = document.createElement(`h1`)
        tryAgain.innerText = `Please select a number and suit`;
        yourCard.append(tryAgain)
    }
}


// Answer(() => {
//     const yes = document.querySelector(`#yes`){
//         alert(`Awesome! Thank you for playing. `)

// }

