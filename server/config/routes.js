var controller = require('../controllers/controller.js');

module.exports = function(app) {


app.all("*",(req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    })

}
