var guess = document.querySelector('.guess')

guess.addEventListener('click', function() {
  var userGuess = document.querySelector('.user-guess')
  var display = document.querySelector('.div')
  display.innerText = userGuess.value
})
