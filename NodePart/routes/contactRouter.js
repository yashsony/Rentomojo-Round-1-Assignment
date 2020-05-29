const express = require('express');
const bodyParser =require('body-parser');
const contactRouter = express.Router();
const cors = require('./cors');
const Contacts = require('../models/contacts');


contactRouter.use(bodyParser.json());
contactRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Contacts.find({})
    .then((Contact) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Contact);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,(req, res, next) => {
    Contacts.create(req.body)
    .then((Contact) => {
        console.log('contact Created ', Contact);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Contact);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions,(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contacts');
})
.delete(cors.corsWithOptions,(req, res, next) => {
    Contacts.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

contactRouter.route('/:contactId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Contacts.findById(req.params.contactId)
    .then((contact) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(contact);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /contact/'+ req.params.contactId);
})
.put(cors.corsWithOptions,(req, res, next) => {
    Contacts.findByIdAndUpdate(req.params.contactId, {
        $set: req.body
    }, { new: true })
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions,(req, res, next) => {
    Contacts.findByIdAndRemove(req.params.contactId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports =contactRouter;