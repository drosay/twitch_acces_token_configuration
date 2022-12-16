'use strict'

const Router = require('express').Router()
const {getToken} = require('../services/token.js').token

Router.get('/', async (req, res)=>{

    const auth_configuration = await getToken()

    res.json(auth_configuration)

})

module.exports = Router