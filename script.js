var guess = document.querySelector('.guess')
var clear = document.querySelector('.clear')
var reset = document.querySelector('.reset')
var userGuess = document.querySelector('.user-guess')
var lastGuess = document.querySelector('.last-guess')
var userInput = document.querySelector('.user-input')
var tooMessage = document.querySelector('.too')
var minNum = 0
var maxNum = 200
var randomNum = Math.floor(Math.random() * (maxNum-minNum))
var lastGuess = document.querySelector('.last-guess').innerText = ('To Play: Pick A Number Between ' + minNum + ' and ' + maxNum)
console.log(randomNum)

userGuess.addEventListener('keyup', function() {
  var userNum = parseInt(userGuess.value)
  if (userNum <= maxNum && userNum >= minNum) {
    guess.disabled = false
    clear.disabled = false
    reset.disabled = false
  } else if (maxNum < userNum || userNum === '') {
    guess.disabled = true
    clear.disabled = true
    reset.disabled = true
  }
})

guess.addEventListener('click', function() {
  var userNumber = parseInt(userGuess.value)
  var lastGuess = document.querySelector('.last-guess').innerText = 'Your last guess was:'
  var userInput = document.querySelector('.user-input').innerText = userGuess.value
  var tooMessage = document.querySelector('.too')
  if(userNumber === randomNum) {
    lastGuess
    userInput
    winner()
    tooMessage.innerText = 'Boom!'
  } else if (userNumber >= minNum && userNumber <= randomNum) {
    lastGuess
    userInput
    tooMessage.innerText = 'That is too low!'
  } else if (userNumber <= maxNum && userNumber >= randomNum) {
    lastGuess
    userInput
    tooMessage.innerText = 'That is too high!'
  } else {
    document.querySelector('.last-guess').innerText = ''
    document.querySelector('.user-input').innerText = ''
    tooMessage.innerText = ('Please Enter A Number Between ' + minNum + ' and ' + maxNum)
  }
})

function winner() {
  var minusMin = (minNum -= 10)
  var plusMax = (maxNum += 10)
  minNum = minusMin
  maxNum = plusMax
  randomNum = Math.floor(Math.random() * (maxNum-minNum))
  var lastGuess = document.querySelector('.last-guess').innerText = ('Play Again! Pick A Number Between ' + minNum + ' and ' + maxNum)
  userGuess.value = ''
  guess.disabled = true
  clear.disabled = true
  reset.disabled = true
  console.log(randomNum)
}

clear.addEventListener('click', function() {
  userGuess.value = ''
  guess.disabled = true
  clear.disabled = true
})

reset.addEventListener('click', function() {
  var randomNum = Math.floor(Math.random() * (maxNum-minNum))
  userGuess.value = ''
  document.querySelector('.last-guess').innerText = ''
  userInput.innerText = ''
  tooMessage.innerText = ('To Play Enter A Number Between ' + minNum + ' and ' + maxNum)
  guess.disabled = true
  clear.disabled = true
  reset.disabled = true
})
