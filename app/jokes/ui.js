'use strict'

const onCreateSuccess = function (responseData) {
  $('#jokes-display').text('Joke successfully created')

  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')

  // extract the move from the response's data
  // update the div with the id `jokes-display` to have html for our joke
  const joke = responseData.joke
  $('#jokes-display').html(`
    <div>
      <h3>${joke.title}</h3>
      <p> ${joke.text}</p>
      <p>ID: ${joke._id}</p>
    </div>
  `)

  $('form').trigger('reset')
  console.log('onCreateSuccess ran. responseData is :', responseData)
}

const onCreateFailure = function (error) {
  $('#error-message').text('Error on creating joke')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (responseData) {
  $('#jokes-display').text('All Jokes successfully received')
  $('#jokes-display').removeClass()
  console.log('onIndexSuccess ran. responseData is :', responseData.jokes)

  let jokesHtml = ''
  const jokes = responseData.jokes
  jokes.forEach(joke => {
    jokesHtml += `
    <div>
      <h3>${joke.title}</h3>
      <p> ${joke.text}</p>
      <p>ID: ${joke._id}</p>
    </div>
  `
  })
  $('#jokes-display').html(jokesHtml)
}

const onIndexFailure = function (error) {
  $('#error-message').text('Error on getting jokes')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (responseData) {
  $('#jokes-display').text('One Joke successfully received')
  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')
  console.log('onShowSuccess ran. responseData is :', responseData)
  $('form').trigger('reset')

  const joke = responseData.joke
  $('#jokes-display').html(`
    <div>
      <h3>${joke.title}</h3>
      <p>${joke.text}</p>
      <p>ID: ${joke._id}</p>
    </div>
  `)
}

const onShowFailure = function (error) {
  $('#error-message').text('Error on getting joke')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#jokes-display').text('Joke successfully deleted')
  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Joke successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#error-message').text('Error on deleting joke')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#jokes-display').text('Joke successfully updated')
  $('#jokes-display').removeClass()
  $('#jokes-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Joke successfully updated')
}

const onUpdateFailure = function (error) {
  $('#error-message').text('Error on updating joke')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}