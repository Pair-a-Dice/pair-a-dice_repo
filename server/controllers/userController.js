const express = require('express');
const userController = {};
const db = require('../models/userModel.js');

//Adding a new user upon registration
userController.addUser = (req, res, next) => {
    const { username, password } = req.body;
    //Insert query text, adds new user to database
    const queryText = `INSERT INTO users (username, password, skill, language) VALUES ($1, $2, $3, $4) RETURNING *`;
    //Parameters used for our query
    const queryParams = [username, password, 'Easy', 'JavaScript']
    //execute query
    db.query(queryText, queryParams)
        .then((result) => {
            res.locals.user = result.rows[0];
            return next();
        })
        //error catch
        .catch((err) => {
            next({
                log: 'Error in addUser middleware function',
                message: { err },
            });
        });
    next();
}

//Updates skill level for respective language.
//Using an update sql statement, added default skill and language in addUser middleware
userController.addSkillLanguage = (req, res, next) => {
    const { skill, language } = req.body;
    //update query, we should set skill and language at default so we don't need separate requests
    const queryText = `UPDATE users SET skill = $1, language = $2 WHERE _id = $3`
    //Parameters for query
     const queryParams = [skill, language, _id]
    //Execute query
     db.query(queryText, queryParams)
        .then((result) => {
        //I don't think we need to return anything to res.locals here
            return next();
        })
        //error handling
        .catch((err) => {
            next({
                log: 'Error in addSkillLanguage middleware function',
                message: { err },
            });
        });
    next();
}

userController.findPartner = (req, res, next) => {

    next();
}

userController.updateUser = (req, res, next) => {

    next();
}

userController.incrementSessionCount = (req, res, next) => {
    //session_count
    const { _id } = req.body;
    //update query to increment session by 1
    const queryText = `UPDATE users SET session_count = session_count + 1 WHERE _id = $1`
    //Parameters for query, still assigning to const even though we only have one variable, may need to add later.
    const queryParams = [_id]
    //Execute query
    db.query(queryText, queryParams)
        .then((result) => {
            return next();
        })
        .catch((err) => {
            next({
                log: 'Error in incrementSessionCount middleware',
                message: { err },
            });
        });
    next();
}



module.exports = userController;