import nodemailer from 'nodemailer';

const autoMail = async(email, name) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'codingninjas2k16@gmail.com',
            pass: 'slwvvlczduktvhdj'
        }
    })

    const mailOptions = {
        from: 'codingninjas2k16@gmail.com',
        to: email,
        subject: 'Successfully Applied to ' + name,
        text: 'You have successfully applied to this job. It takes time to verify your resume. please have patience and wait for our response.'
    };

    try{
        const result = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err)
    }
}

export default autoMail;