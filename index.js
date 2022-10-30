const express = require ('express')
const app = express ()
const profileData = require('./profile.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(profileData)
})

app.listen(port, () => {
    console.log('App is listening to port', port)
})