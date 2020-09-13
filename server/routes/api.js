const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Post request for user registration
router.post('/user', userController.addUser);

//Put request, skill level and language
// router.put('/skill', userController.addSkillLanguage);

//get request for partner
router.get('/partner', userController.findPartner);

//Put request, update partners Yes/No,
// router.put('/feedback', userController.updateUserFeedback);

// //Put request, increment session count
// router.put('/session', userController.incrementSessionCount);

module.exports = router;