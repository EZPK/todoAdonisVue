'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

// Registration

Route.group(()=>{
  Route.post('auth/register', 'UserController.register')
  Route.post('auth/login', 'UserController.login')


  Route.post('projects', 'ProjectController.create').middleware('auth')
  Route.get('projects', 'ProjectController.index').middleware('auth')
})
  .prefix('api/v0')