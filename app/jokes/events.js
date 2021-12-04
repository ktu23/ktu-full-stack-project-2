'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onAddJoke = function (event) {
  event.preventDefault()
  console.log('onCreateJoke ran!')

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexJokes = function (event) {
  event.preventDefault()
  console.log('onIndexJokes ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowJoke = function (event) {
  event.preventDefault()
  console.log('onShowJoke ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.joke.id

  api.show(id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onDeleteJoke = function (event) {
  event.preventDefault()
  console.log('onDeleteJoke ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.joke.id

  api.destroy(id)
    .then(ui.onDeleteSuccess)
    // .then(console.log)
    .catch(ui.onDeleteFailure)
}

const onUpdateJoke = function (event) {
  event.preventDefault()
  console.log('onUpdateJoke ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.joke.id

  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const addHandlers = () => {
  $('#jokes-create').on('submit', onAddJoke)
  $('#jokes-index').on('submit', onIndexJokes)
  $('#jokes-show').on('submit', onShowJoke)
  $('#jokes-delete').on('submit', onDeleteJoke)
  $('#jokes-update').on('submit', onUpdateJoke)
}

module.exports = {
  addHandlers,
  onAddJoke,
  onIndexJokes,
  onDeleteJoke,
  onShowJoke,
  onUpdateJoke
}
