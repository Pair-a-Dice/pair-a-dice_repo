const express = require('express');
const userController = {};
const db = require('../models/userModel.js');

//Adding a new user upon registration
userController.addUser = (req, res, next) => {
    const { username, password } = req.body;
    //Insert query text, adds new user to database
    const queryText = `INSERT INTO users (username, password, skill, language, status, sessioncount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    //Parameters used for our query
    const queryParams = [req.query.username, req.query.password, 'Easy', 'JavaScript', 'NotReady', 0]
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

//Updates skill level and language.
userController.addSkillLanguage = (req, res, next) => {
    const { skill, language } = req.body;
    //update query, we should set skill and language at default so we don't need separate requests
    const queryText = `UPDATE users SET skill = $1, language = $2 WHERE _id = $3`
    //Parameters for query
     const queryParams = [req.query.skill, req.query.language, req.query._id]
    //Execute query
     db.query(queryText, queryParams)
        .then((result) => {
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

//Need to add new query
userController.findPartner = (req, res, next) => {
    const queryText = `
    SELECT _id FROM users WHERE language = $1 AND skill = $2 AND status = 'Ready' AND _id != $4
    EXCEPT
        SELECT partnerb_id FROM sessions WHERE (partnera_id = $4 AND partnera_feedback = $5) OR (partnera_id = $4 AND partnerb_feedback = $6)
    EXCEPT
        SELECT partnera_id FROM sessions WHERE (partnerb_id = $4 AND partnerb_feedback = $6) OR (partnerb_id = $4 AND partnera_feedback = $5)
    ORDER BY _id`
    const queryParams = [req.query.language, req.query.skill, req.query.status, req.query._id,]
    db.query(`SELECT * FROM users`)
        .then((result) => {
            res.locals.partner = result.rows[0];
            console.log(res.locals.users);
            return next();
        })
    next();
}

userController.updateUser = (req, res, next) => {

    next();
}

userController.incrementSessionCount = (req, res, next) => {
    //session_count
    const { _id } = req.body;
    //update query to increment session by 1
    const queryText = `UPDATE users SET sessioncount = sessioncount + 1 WHERE _id = $1`
    //Parameters for query, still assigning to const even though we only have one variable, may need to add later.
    const queryParams = [req.query._id]
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