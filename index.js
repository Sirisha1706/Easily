import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import RecuiterController from "./src/controllers/recuiter.controller.js";
import AppController from "./src/controllers/app.controler.js";
import session from "express-session";
import { uploadFile } from "./src/middleware/uploadFile.middleware.js";
import { auth } from "./src/middleware/auth.middleware.js";

const recuiterControl = new RecuiterController();
const appControl = new AppController();

const app = express();
app.use(session({
    secret: 'secretKey',
    saveUninitialized: true,
    resave: false,
    cookie: {secure: false}
}))

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.get('/', appControl.gethome);

// Recuiter routes
app.get('/register', recuiterControl.getRegister)
app.post('/register', recuiterControl.addUser);
app.get('/login', recuiterControl.getLogin);
app.post('/login', recuiterControl.loginUser);
app.get('/logout', recuiterControl.logoutUser);

// jobs routes
app.get('/jobs', appControl.getJobs); // retrieve all jobs 
app.post('/jobs', appControl.getNewjob); // create new job 
app.get('/jobs/:id', appControl.getDetails); // retrieve a specific job details by id
app.post('/jobs/:id/update', appControl.updateDetails);
app.get('/apply/:id', appControl.jobApply); // render a page to apply  
app.post('/jobs/:id/apply', uploadFile.single('resume') ,appControl.getApplication); // add a new applicant to a job list
app.get('/jobs/:id/delete', appControl.deletejob);

app.get('/newjob', appControl.renderNewjob);
app.get('/jobs/:id/update', appControl.editjob);
app.get('/delete', appControl.confirmDelete)

// aplicants routs
app.get('/jobs/:id/applicants', auth, appControl.getApplicant);
app.get('/:filename', appControl.getResume);

app.post('/search', appControl.searchJobs);

app.listen(3200, () => {
  console.log("server is listening on 3200");
});

