'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class RessourceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(404).json({
      error: 'Ressource not exist',
    })
  }
}

module.exports = RessourceNotExistException
