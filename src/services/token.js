'use strict'

const axios = require('axios')
const {token_configuration} = require('../conf/keys.js')
const {token_url, client_id, client_secret, grant_type} = token_configuration

const token = {
    expired: true,
    getToken
}

const auth_configuration = {
    client_id,
    access_token: '',
    token_type: ''
}

async function getToken(){
    if(!token.expired) return auth_configuration
    try {
        const response = await axios.post(token_url,{
            client_id,
            client_secret,
            grant_type
        })
        if(response.status !== 200) Promise.reject(response.data)

        const {access_token, expires_in, token_type} = response.data

        expired(expires_in)

        auth_configuration.access_token = access_token
        auth_configuration.token_type = token_type

        return auth_configuration  
    }
    catch(data) {
        console.log(data.message)
    }

}

function expired(expires_in){
    token.expired = false
    setTimeout(()=>{
        token.expired = true
    }, expires_in)
}

module.exports = {
    token
}