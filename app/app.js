// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const jokeEvents = require('./jokes/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // select the jokes-index button ($('#jokes-index'))
  // whenever (on) a click event occurs,run the function
  // $('#jokes-index').on('click', () => console.log('get all jokes clicked'))
  $('#jokes-index').on('click', jokeEvents.onIndexJokes)
  // select the jokes-show form ($('#jokes-show'))
  // on a submit event, run the `onShowjoke` event handler function
  $('#jokes-show').on('submit', jokeEvents.onShowJoke)
  $('#jokes-destroy').on('submit', jokeEvents.onDestroyJoke)
  $('#jokes-update').on('submit', jokeEvents.onUpdateJoke)
  $('#jokes-add').on('submit', jokeEvents.onAddJoke)

  // // whenever a dynamic destroy button is clicked, run jokeEvents.onDynamicDestroyjoke
  // $('#jokes-display').on('click', '.jokes-destroy-dynamic', jokeEvents.onDynamicDestroyJoke)
  // // Update joke Dynamic
  // $('#jokes-display').on('submit', '.jokes-update-dynamic', jokeEvents.onDynamicUpdateJoke)

  // $('#event-button').on('click', () => {
  //   console.log('the event button was clicked')
  // })

  $('#event-div').on('click', () => {
    console.log('the event button was clicked')
  })
})
