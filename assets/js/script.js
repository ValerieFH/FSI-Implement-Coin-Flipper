let headCount = 0
let tailCount = 0

function updateCounts (){
    document.querySelector('#heads').textContent = headCount
    document.querySelector('#tails').textContent = tailCount
}

function updatePercents (){
    if (headCount + tailCount == 0){
        document.querySelector('#heads-percent').textContent = '0%'
        document.querySelector('#tails-percent').textContent = '0%'
    } else {
        document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount+tailCount) * 100) + '%'
        document.querySelector('#tails-percent').textContent = Math.round(tailCount/(headCount+tailCount) * 100) + '%'
    }
}

function changeMessage(text){
    document.querySelector('#message').textContent = text
}

function changePicture(src, alt) {
    let pennyFace = document.querySelector('#penny')
    pennyFace.src = src
    pennyFace.alt = alt
}

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#flip').addEventListener('click', function(e){
        if (Math.random() > 0.5) {
            changePicture("assets/images/penny-heads.jpg","2005 Penny, head side")
            changeMessage("You Flipped Heads!")
            headCount++

            } else {

            changePicture("assets/images/penny-tails.jpg","2005 Penny, head side")
            changeMessage("You Flipped Tails!")
            tailCount++
        }
        updateCounts()
        updatePercents()
    })

    document.querySelector('#clear').addEventListener('click', function(e){
            headCount = 0
            tailCount = 0
            changeMessage("Play Again!")
            updateCounts()
            updatePercents()
    })

})