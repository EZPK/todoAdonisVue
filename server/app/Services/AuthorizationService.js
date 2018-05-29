const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const RessourceNotExistException = use('App/Exceptions/RessourceNotExistException')

class AuthorizationService {
    verifyPermission(ressource, user){

        if(!ressource){
            console.log('Ressource don\'t exist !')
            throw new RessourceNotExistException()
        }

        if(ressource.user_id !== user.id ){
            console.log('invalid access !')
            throw new InvalidAccessException()
        }
    }
}


module.exports = new AuthorizationService()