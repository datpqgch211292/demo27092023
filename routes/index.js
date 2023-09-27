var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('index',);
});

/*display login form (GET method) */
router.get('/', (req, res) => {
  res.render('login');
})

/*display login form (POST method) */
router.post('/login', (req, res) => {
//save input data to $data variable
   var data = req.body;
  
  

  //validate login information
  var username = data.username;
  var password = data.password;
  var message = null;
  if(username == "admin" && password == "123456") {
    // res.send("<h1>Login success</h1>");
    // message = "Login succeed!"
    //redirect page to mainpage after successful login
    res.redirect('/main');
  } else {
    // res.send("<h1>Login fail</h1>")
    // message = "Login failed!"
    //redirect page to login page after failed login
    res.redirect('/');
  }
  // res.render('result', {message:message})
  // console.log(data);
  // res.send(data);
})

module.exports = router;
