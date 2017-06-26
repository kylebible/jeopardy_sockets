var controller = require('../controllers/controller.js');
const path = require('path');

module.exports = function(app) {

app.get('/newgame', function(req,res) {
    controller.newgame(req,res)
})

app.get('/getgame',function(req,res) {
    controller.getgame(req,res)
})

app.all("*",(req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })

}
