/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  index() {
    return ['post 1', 'post 2', 'post 3']
  }
}

// ROUTE -> CONTROLLER -> MODEL
