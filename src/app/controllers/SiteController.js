const Course = require('../models/Course')
const { multipleMogooseToObject } = require('../../util/mongoose')
class SiteController {
     index(req, res, next) {
        Course.find({})
            .then(courses => {
           
                res.render('home', {
                    courses: multipleMogooseToObject(courses)
                })
            } )
            .catch(next)    
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
