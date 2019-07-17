function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function play(player, computer){
    let loserMessage = "You lose :("
    let winnerMessage = "You win :)"
    if (player === computer){
        return "It's a tie!"
    } else if (player === "rock" && computer === "paper"){
        return loserMessage
    } else if (player === "rock" && computer === "scissors"){
        return winnerMessage
    } else if (player === "paper" && computer === "rock"){
        return winnerMessage
    } else if (player === "paper" && computer === "scissors"){
        return loserMessage
    } else if (player === "scissors" && computer === "rock"){
        return loserMessage
    } else if (player === "scissors" && computer === "paper"){
        return winnerMessage
    }
}

function loadScript(){
    const allImages = document.getElementsByClassName("mainImage")
    const computersAnswer = document.getElementsByClassName("answerImage")[getRandomInt(3)]
    const message = document.getElementsByClassName("message")[0]
    const choiceMessages = document.getElementsByClassName("choice")

    const hideEverythingElse = (event) => {
        Array.from(allImages).forEach(img => {
           if (img !== event.target) {
               img.style.display = "none"
           }
         })
        event.target.style.cursor = "inherit"
        computersAnswer.style.display = "block"
        message.textContent = play(event.target.alt, computersAnswer.alt) 
        document.getElementsByClassName("initialMsg")[0].style.display = "none"
        document.getElementsByTagName("button")[0].style.display = "block"
        
         Array.from(choiceMessages).forEach(p => {
             p.style.display ="block"
         })
     
        }

    Array.from(allImages).forEach(img => {
        img.addEventListener("click", hideEverythingElse)
    })

    const resetGame = () => location.reload();
    
    document.getElementsByTagName("button")[0].addEventListener("click", resetGame)
}

document.addEventListener("DOMContentLoaded", loadScript)