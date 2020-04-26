const express = require('express')
const router = express.Router()

router.get('/' , (req,res) => {
    res.render('home.html' , {title:'Home'})
})
router.get('/about' , (req,res) => {
    res.render('about.html' , {title:'About'})
})
router.get('/contacto' , (req,res) => {
    res.render('contacto.html' , {title:'Contacto'})
})

module.exports = router;