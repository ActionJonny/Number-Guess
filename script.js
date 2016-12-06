var guess = document.querySelector('.guess')
var clear = document.querySelector('.clear')
var reset = document.querySelector('.reset')
var minNum = 1
var maxNum = 200
var number = Math.ceil(Math.random() * maxNum * minNum)
var userPlaceHolder= document.querySelector('.user-guess').placeholder='Enter your guess'
console.log(number)

if(userPlaceHolder < minNum) {
  document.querySelector('.user-guess').disabled = true
} if (userPlaceHolder > maxNum) {
  document.querySelector('.user-guess').disabled = true
}

guess.addEventListener('click', function() {
  var userGuess = document.querySelector('.user-guess')
  var display = document.querySelector('.div')
  var parse = parseInt(userGuess.value)
  display.innerText = userGuess.value;

  if(parse === number) {
    display.innerText = ('Your last guess was' + userGuess.value + 'Boom!')
  } else if (parse < number) {
    display.innerText = ('Your last guess was' + userGuess.value + 'That was too Low!')
  } else if (parse > number) {
    display.innerText = ('Your last guess was' + userGuess.value + 'That too High!')
  } else {
    display.innerText = 'Please Enter A Number Between ' + minNum + '-' + maxNum
  }
})

clear.addEventListener('click', function() {
  var userGuess = document.querySelector('.user-guess')
  userGuess.value = ''
})

reset.addEventListener('click', function() {
  number = Math.floor(Math.random() * maxNum * minNum)
  console.log(number)
  var userGuess = document.querySelector('.user-guess');
  var display = document.querySelector('.div')
  userGuess.value = ''
  display.innerText = ''
})
