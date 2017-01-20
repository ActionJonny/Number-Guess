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
var randomNum = Math.floor(Math.random() * (maxNum-minNum + 1) + minNum)
var lastGuess = document.querySelector('.last-guess').innerText = ('To Play: Pick A Number Between ' + minNum + ' and ' + maxNum)
console.log("random number ",randomNum)
console.log("min number ",minNum);
console.log("max number ",maxNum);

function notDisabled() {
  guess.disabled = false
  clear.disabled = false
  reset.disabled = false
}

function disabled() {
  guess.disabled = true
  clear.disabled = true
  // reset.disabled = true
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
    reset.disabled = false
  } else if (userNumber >= minNum && userNumber <= randomNum) {
    lastGuess
    userInput
    userGuess.value = ''
    tooMessage.innerText = 'That is too low!'
    disabled()
  } else if (userNumber >= parseMin && userNumber <= randomNum) {
    lastGuess
    userInput
    userGuess.value = ''
    tooMessage.innerText = 'That is too low!'
    disabled()
  } else if (userNumber <= maxNum && userNumber >= randomNum) {
    lastGuess
    userInput
    userGuess.value = ''
    tooMessage.innerText = 'That is too high!'
    disabled()
  } else if (userNumber <= parseMax && userNumber >= randomNum) {
    lastGuess
    userInput
    userGuess.value = ''
    tooMessage.innerText = 'That is too high!'
    disabled()
  } else {
    userGuess.value = ''
    document.querySelector('.last-guess').innerText = ''
    document.querySelector('.user-input').innerText = ''
    tooMessage.innerText = ('Please Enter A Number Between ' + minNum + ' and ' + maxNum)
    disabled()
  }
})

function winner() {
  var minusMin = (minNum -= 10)
  var plusMax = (maxNum += 10)
  minNum = minusMin
  maxNum = plusMax
  var lastGuess = document.querySelector('.last-guess').innerText = ('Play Again! Pick A Number Between ' + minNum + ' and ' + maxNum)
  randomNum = Math.floor(Math.random() * (maxNum-minNum + 1) + minNum)
  userGuess.value = ''
  disabled()
  console.log("random number ",randomNum)
  console.log("min number ",minNum);
  console.log("max number ",maxNum);
}

clear.addEventListener('click', function() {
  userGuess.value = ''
  guess.disabled = true
  clear.disabled = true
})

reset.addEventListener('click', function() {
  minNum = 0
  maxNum = 100
  randomNum = Math.floor(Math.random() * (maxNum-minNum + 1) + minNum)
  userGuess.value = ''
  document.querySelector('.last-guess').innerText = ''
  userInput.innerText = ''
  userMin.value =  ''
  userMax.value = ''
  tooMessage.innerText = ('To Play: Enter A Number Between ' + minNum + ' and ' + maxNum)
  console.log("random number ", randomNum)
  console.log("min number ", minNum);
  console.log("max number ", maxNum);
})

set.addEventListener('click', function() {
  minNum = parseInt(userMin.value)
  maxNum = parseInt(userMax.value)
  randomNum = Math.floor(Math.random() * (maxNum-minNum + 1) + minNum)
  userInput.innerText = ''
  tooMessage.innerText = ''
  userGuess.value = ''
  disabled()
  var lastGuess = document.querySelector('.last-guess').innerText = ('To Play: Pick A Number Between ' + minNum + ' and ' + maxNum)
  console.log("random number ", randomNum)
  console.log("min number ", minNum);
  console.log("max number ", maxNum);
})
