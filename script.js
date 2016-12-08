var guess = document.querySelector('.guess')
var clear = document.querySelector('.clear')
var reset = document.querySelector('.reset')
var userGuess = document.querySelector('.user-guess')
var lastGuess = document.querySelector('.last-guess')
var userInput = document.querySelector('.user-input')
var tooMessage = document.querySelector('.too')
var set = document.querySelector('.set')
var userMin = document.querySelector('.min')
var userMax = document.querySelector('.max')
var minNum = 0
var maxNum = 100
var randomNum = Math.floor(Math.random() * (maxNum-minNum))
var lastGuess = document.querySelector('.last-guess').innerText = ('To Play: Pick A Number Between ' + minNum + ' and ' + maxNum)
console.log(randomNum)

function notDisabled() {
  guess.disabled = false
  clear.disabled = false
  reset.disabled = false
}

function disabled() {
  guess.disabled = true
  clear.disabled = true
  reset.disabled = true
}

userGuess.addEventListener('keyup', function() {
  var userNum = parseInt(userGuess.value)
  var parseMin = parseInt(userMin.value)
  var parseMax = parseInt(userMax.value)
  if (userNum <= maxNum && userNum >= minNum) {
    notDisabled()
  } if (userNum <= parseMax && userNum >= parseMin) {
    notDisabled()
  } else if (maxNum < userNum || parseMax < userNum || parseMin > userNum || userGuess.value === '') {
    disabled()
  }
})

guess.addEventListener('click', function() {
  var userNumber = parseInt(userGuess.value)
  var parseMin = parseInt(userMin.value)
  var parseMax = parseInt(userMax.value)
  var lastGuess = document.querySelector('.last-guess').innerText = 'Your last guess was:'
  var userInput = document.querySelector('.user-input').innerText = userGuess.value
  if(userNumber === randomNum) {
    lastGuess
    userInput
    winner()
    tooMessage.innerText = 'Boom!'
  } else if (userNumber >= minNum && userNumber <= randomNum) {
    lastGuess
    userInput
    tooMessage.innerText = 'That is too low!'
  } else if (userNumber >= parseMin && userNumber <= randomNum) {
    lastGuess
    userInput
    tooMessage.innerText = 'That is too low!'
  } else if (userNumber <= maxNum && userNumber >= randomNum) {
    lastGuess
    userInput
    tooMessage.innerText = 'That is too high!'
  } else if (userNumber <= parseMax && userNumber >= randomNum) {
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
  var lastGuess = document.querySelector('.last-guess').innerText = ('Play Again! Pick A Number Between ' + minNum + ' and ' + maxNum)
  var minusMin = (minNum -= 10)
  var plusMax = (maxNum += 10)
  minNum = minusMin
  maxNum = plusMax
  randomNum = Math.floor(Math.random() * (maxNum-minNum))
  userGuess.value = ''
  disabled()
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
  userMin.value =  ''
  userMax.value = ''
  tooMessage.innerText = ('To Play: Enter A Number Between ' + minNum + ' and ' + maxNum)
  disabled()
})

set.addEventListener('click', function() {
  var parseMin = parseInt(userMin.value)
  var parseMax = parseInt(userMax.value)
  randomNum = Math.floor(Math.random() * (parseMax-parseMin)) + parseMin
  userInput.innerText = ''
  tooMessage.innerText = ''
  userGuess.value = ''
  disabled()
  var lastGuess = document.querySelector('.last-guess').innerText = ('To Play: Pick A Number Between ' + parseMin + ' and ' + parseMax)
    console.log(randomNum)
})
