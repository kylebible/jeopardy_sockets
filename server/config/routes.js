var controller = require('../controllers/controller.js');
const path = require('path');

module.exports = function(app) {


app.all("*",(req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    })

}
