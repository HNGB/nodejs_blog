const Course = require('../models/Course')
const { multipleMogooseToObject } = require('../../util/mongoose')
class MeController {

    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMogooseToObject(courses)
            }))
            .catch(next)
                
            
    }
}

module.exports = new MeController();
