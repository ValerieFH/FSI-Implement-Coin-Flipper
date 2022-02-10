let headCount = 0
let tailCount = 0

//TODO: refactor to use functions

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#flip').addEventListener('click', function(e){
        if (Math.random() > 0.5) {
            console.log('heads')
            let pennyFace = document.querySelector('#penny')
            pennyFace.src = "assets/images/penny-heads.jpg"
            pennyFace.alt = "2005 Penny, head side"

            document.querySelector('#message').textContent = "You Flipped Heads!"

            headCount++

            document.querySelector('#heads').textContent = headCount
            document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount+tailCount) * 100) + '%'
            document.querySelector('#tails-percent').textContent = Math.round(tailCount/(headCount+tailCount) * 100) + '%'
                } else {
            console.log('tails')
            let pennyFace = document.querySelector('#penny')
            pennyFace.src = "assets/images/penny-tails.jpg"
            pennyFace.alt = "2005 Penny, head side"

            document.querySelector('#message').textContent = "You Flipped Tails!"

            tailCount++

            document.querySelector('#tails').textContent = tailCount
            document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount+tailCount) * 100) + '%'
            document.querySelector('#tails-percent').textContent = Math.round(tailCount/(headCount+tailCount) * 100) + '%'
        }
        // Flip Button Click Handler
            // TODO: Update image and status message in the DOM
    
            // Update the scorboard
            // TODO: Calculate the total number of rolls/flips
            // Make variables to track the percentages of heads and tails
            // TODO: Use the calculated total to calculate the percentages
            // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
            // TODO: Update the display of each table cell
    })

    document.querySelector('#clear').addEventListener('click', function(e){
        // Clear Button Click Handler
            // TODO: Reset global variables to 0
            headCount = 0
            tailCount = 0
            document.querySelector('#message').textContent = "Play Again!"
            // TODO: Update the scoreboard (same logic as in flip button click handler)
            document.querySelector('#heads').textContent = headCount
            document.querySelector('#tails').textContent = tailCount
            document.querySelector('#heads-percent').textContent = '0%'
            document.querySelector('#tails-percent').textContent = '0%'
    })

})