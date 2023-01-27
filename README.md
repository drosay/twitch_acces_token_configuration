#server to serve (: the token configuration to landy_games

/conf/keys.js is a file needed to work with the next configuration:

```
token_configuration = {
    client_id: "Your client id",
    client_secret: "Your client secret",
    grant_type: "client_credentials",
    token_url: "https://id.twitch.tv/oauth2/token"
}

module.exports = {
    token_configuration
}
```
