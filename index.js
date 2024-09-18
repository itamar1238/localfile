const express = require("express")
const app = express()

// set the public folder to serve public assets
app.use(express.static('public'))

app.listen(8080, () => {
    console.log("We're started up.");
})