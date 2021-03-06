'use strict'

// require the store object. We will use it to share data
// between different files
const store = require('../store')

const signUpSuccess = function(responseData) {
  // tell the user it was successful
  $('#jokes-display').text('Signed up successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  // tell the user it was successful
  $('#error-message').text('Sign up failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const signInSuccess = function(responseData) {
  // we are going to add the `user` we got back in our response's data
  // to the `store` object. So we can access the user's token
  // later in api.js

  store.user = responseData.user
  console.log('store is', store)

  // tell the user it was successful
  $('#jokes-display').text('Signed in successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  // After we sign in, hide the section with the id `before-sign-in`
  $('#before-sign-in').hide()
  // After we sign in, show the section with the id `after-sign-in`
  $('#after-sign-in').show()

  $('#signoutbutton').show()
  $('#getalljokes').show()
  $('#create').show()
  $('#destroy').show()
  $('#hide').show()
  $('#update').show()

  // hide all the content from main page after logging in
  $('#after-new-joke').hide()

  $('#jokeOver').hide()

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  // tell the user it was successful
  $('#error-message').text('Sign in failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const signOutSuccess = function(responseData) {
  // tell the user it was successful
  $('#jokes-display').text('Signed out successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  // After we sign out, show the section with the id `before-sign-in`
  $('#before-sign-in').show()
  // After we sign out, hide the section with the id `after-sign-in`
  $('#signoutbutton').hide()
  $('#getalljokes').hide()
  $('#create').hide()
  $('#destroy').hide()
  $('#hide').hide()
  $('#update').hide()

  $('#error-message').text('Welcome to the joke factory!').hide()

  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  // tell the user the sign out failed
  $('#error-message').text('Sign out failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const changePasswordSuccess = function(responseData) {
  // tell the user it was successful
  $('#jokes-display').text('Changed password successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
  // tell the user it was successful
  $('#error-message').text('Changing passwords failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
