const express = require('express')
const router = express.Router();
const{ add_Course,get_Course, delete_Course,get_Course_by_Instructor}=require('../controllers/course');
const { authMiddleware } = require('../middleware/userAuth');

router.post('/newcourse',authMiddleware,add_Course)
router.get('/',get_Course)
router.get('/StudentCourse',get_Course)

//router.get('/:id',get_Course_by_Instructor)
router.delete('/deletecourse/:id',delete_Course)




module.exports = router;

