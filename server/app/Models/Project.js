'use strict'

const Model = use('Model')

class Project extends Model {
    usera(){
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Project
