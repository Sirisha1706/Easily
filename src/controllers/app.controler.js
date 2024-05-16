import { addApplicants, addJob, jobbyId, modifyJob, renderJobs, deleteJob, getApplicants, searchjobName, jobName, jobDetails } from "../models/jobs.model.js";
import path from "path";
import autoMail from "./autogenerateMail.js";

var id;
export default class AppController{
    
    gethome = (req, res) =>{
        res.render('home', {user: req.session.user});
    }
    getJobs = (req, res) =>{
        res.render('Jobs', {jobs: renderJobs(), user: req.session.user});
    }
    getNewjob = (req, res, next) =>{
        console.log(req.body);
        addJob(req.body); 
        res.redirect('/jobs'); 
    }
    getDetails = (req, res) =>{
        id = req.params.id;
        res.render('jobDetails', {job: jobbyId(id), user: req.session.user})
    }
    updateDetails = (req, res) =>{
        let details =  jobDetails(id);
        let data = {...req.body, ...details};
        modifyJob(data, id);
        res.redirect('/jobs');
    }
    jobApply = (req, res) =>{
        res.render('apply');
    }
    getApplication =(req, res)=>{
        const applierDetails = {resume: req.file.filename , ...req.body}
        addApplicants(applierDetails, id);
        autoMail(req.body.email, jobName(id));
        res.redirect('/jobs');
    }
    renderNewjob = (req,res) =>{
        res.render('newJob');
    }
    editjob(req, res) {
        res.render('updateJob', {job: jobbyId(id)});
    }
    confirmDelete(req, res){
        res.render('delete', {id: id});
    }
    deletejob(req, res){
        deleteJob(id);
        res.redirect('/jobs');
    }

    getApplicant(req, res){
        const applicants = getApplicants(id)
        res.render('applicants',{applicants: applicants})
    }
    getResume(req,res){
        console.log(req.params.filename);
        const filePath = path.join(path.resolve(), '/public', req.params.filename)
        console.log(filePath);
        res.sendFile(filePath);
    }
    searchJobs(req,res){
        res.render('Jobs', {jobs: searchjobName(req.body.name), user: req.session.user}); 
    }
}