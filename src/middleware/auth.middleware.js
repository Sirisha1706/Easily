import { body } from "express-validator";

export const auth = (req, res, next) => {
    if(req.session.user)
        next();
    else {
        let id = req.params.id;
        res.send("<script>alert('Only Recuiter has the access to view Applicants'); window.location.href='/jobs';</script>")
    } 
}