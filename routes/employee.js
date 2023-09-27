var express = require('express');
var router = express.Router();

//hiển thị form
router.get('/', (req, res) => {
    //render ra file: views/employee/add.hbs
    res.render('employee/add')
})


//nhận và show dữ liệu từ form
router.post('/', (req, res) => {
    var employee = req.body;
    //render ra file: views/employee/view.hbs
    res.render('employee/view', {employee : employee})
})


module.exports =  router;