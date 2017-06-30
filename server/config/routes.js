var controller = require('../controllers/controller.js');
const path = require('path');

module.exports = function(app) {
    
    app.all("*",(req,res,next) => {
        console.log("at *")
        res.sendFile(path.resolve("./public/dist/index.html"))
    })

}
