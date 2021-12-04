'use strict'

// require the getFormFields function, to get data from our forms
const getFormFields = require('../../lib/get-form-fields')

// require our api auth functions
const api = require('./api')
// require our ui functions to update the page
const ui = require('./ui')

const onSignUp = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .signUp(formData)
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signUpSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api.signIn(formData)
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signInSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .signOut()
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signOutSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signOutFailure)
}

// const onIndexJokes = () => {
//   // make our index request GET /jokes
//   api.index()
//     // if our HTTP request to get the jokes was successful, *then* run `console.log`
//     // *then* means ONLY RUN IF IT IS SUCCESSFUL
//     .then(ui.onIndexJokesSuccess)
//     // otherwise, if an error occurred, log it as a red error message
//     .catch(ui.onError)
// }

// const onShowJoke = (event) => {
//   // prevent the default action of the form refreshing the page
//   // when it is submitted
//   event.preventDefault()

//   // event.target is whatever submitted the event, we are
//   // storing it in the user friendly variable `form`
//   const form = event.target
//   // Get the data out of our `form`
//   const formData = getFormFields(form)
//   console.log(formData)

//   // extract the id from our form's data
//   const id = formData.joke.id

//   // make an HTTP request, to show a single joke based on its id
//   api.show(id)
//     // if getting a single joke was successful, show it on the page
//     .then(ui.onShowJokeSuccess)
//     // otherwise, show an error message
//     .catch(ui.onError)
// }

// const onDestroyJoke = (event) => {
//   event.preventDefault()

//   const form = event.target
//   const formData = getFormFields(form)
//   console.log(formData)

//   // extract the id from our form's data
//   const id = formData.joke.id

//   // make an HTTP request, to destroy a single joke based on its id
//   api.destroy(id)
//     // if destroying a single joke was successful, show it on the page
//     .then(ui.onDestroyJokeSuccess)
//     // otherwise, show an error message
//     .catch(ui.onError)
// }

// const onUpdateJoke = (event) => {
//   // prevent the default action of the form refreshing the page
//   // when it is submitted
//   event.preventDefault()

//   // event.target is whatever submitted the event, we are
//   // storing it in the user friendly variable `form`
//   const form = event.target
//   // Get the data out of our `form`
//   const formData = getFormFields(form)
//   console.log(formData)

//   // extract the id from our form's data
//   const id = formData.joke.id

//   // make an HTTP request, to update a single joke based on its id
//   // pass `formData` to update the joke with a new title and author
//   api.update(id, formData)
//     // if getting a single joke was successful, show it on the page
//     .then(ui.onUpdateJokeSuccess)
//     // otherwise, show an error message
//     .catch(ui.onError)
// }

// const onAddJoke = (event) => {
//   // prevent the default action of the form refreshing the page
//   // when it is submitted
//   event.preventDefault()

//   // event.target is whatever submitted the event, we are
//   // storing it in the user friendly variable `form`
//   const form = event.target
//   // Get the data out of our `form`
//   const formData = getFormFields(form)
//   console.log(formData)

//   // extract the id from our form's data
//   const id = formData.joke.id

//   // make an HTTP request, to update a single joke based on its id
//   // pass `formData` to update the joke with a new title and author
//   api.create(id, formData)
//     // if getting a single joke was successful, show it on the page
//     .then(ui.onAddJokeSuccess)
//     // otherwise, show an error message
//     .catch(ui.onError)
// }

// const onDynamicDestroyJoke = (event) => {
//   // select the button (event.target) and access its data-id attribute
//   const id = $(event.target).data('id')

//   // make an HTTP request, to destroy a single joke based on its id
//   api.destroy(id)
//     // if destroying a single joke was successful, show it on the page
//     .then(ui.onDestroyJokeSuccess)
//     // otherwise, show an error message
//     .catch(ui.onError)
// }

// const onDynamicUpdateJoke = (event) => {
//   event.preventDefault()
//   const form = event.target
//   // get data out of our form
//   const formData = getFormFields(form)
//   console.log(formData)
//   // select the ID from the data-id attribute
//   const id = $(event.target).data('id')
//   api
//     .update(id, formData)
//     .then(ui.onUpdateJokeSuccess)
//     .catch(ui.onError)
// }
// make a variable to check the winner of the game
// we will have to do this for every possible winning combo - so 8 total

// export our event handler functions, so we can use them
// in app.js
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
  // onIndexJokes,
  // onDynamicUpdateJoke,
  // onDynamicDestroyJoke,
  // onAddJoke,
  // onUpdateJoke,
  // onDestroyJoke,
  // onShowJoke
}
