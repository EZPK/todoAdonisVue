'use strict'

const User = use('App/Models/User')

class UserController {

    async login({ request, auth }){
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        
        return token
    }


    async register({ request }){        
        const { email, password } = request.all()
        await User.create({
            email,
            password,
            username: email
        }).catch((err) => {
            console.log('Err:', err);
        })
        return this.login(...arguments)
    }
}

module.exports = UserController
