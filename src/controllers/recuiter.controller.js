import {registerUser, authenticateUser} from '../models/user.model.js';

export default class RecuiterController {
  
  getRegister = (req, res, next) => {
    res.render('register', {user: req.session.user});
    next();
  };
  getLogin = (req, res, next) => {
    res.render('login', {user: req.session.user});
  };
  addUser = (req, res) => {
    registerUser(req.body);
    res.redirect('/login');
  };
  loginUser = (req, res) => {
    const outp = authenticateUser(req.body);
    if(!outp) res.redirect('/login')
    req.session.user = req.body.email;
    return res.redirect('jobs');
  };
  logoutUser = (req,res)=>{
    req.session.destroy( err =>{
      if(!err) res.redirect('/');
      else console.log(err)
    })
  }
}
