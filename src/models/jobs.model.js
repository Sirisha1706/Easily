import moment from "moment";

const jobs =[
    {   id: 1,
        type: 'Tech',
        designation: 'SDE', 
        location: 'Gurgoo IND Remote',
        name:'Coding Ninjas',
        salary:'14-20Lpa',  
        applyby: '2023-08-30',
        skills:['React', 'NodeJS', 'JS', 'SQL', 'MongoDB', 'Express', 'AWS'],
        openings: 5,
        jobposted: '10/2/2023 12:43:48 pm',
        applicants: []
    },
    {   id: 2,
        type: 'Tech',
        designation: 'Angular Developer', 
        location: 'Pune IND On-Site',
        name:'Go Digit',
        salary:'5-10Lpa',  
        applyby: '2023-12-30',
        skills:['Angular', 'JS', 'SQL', 'MongoDB', 'Express', 'AWS'],
        openings: 5,
        jobposted: '10/4/2024 12:43:48 pm',
        applicants: []
    },
    {   id: 3,
        type: 'Tech',
        designation: 'SDE', 
        location: 'Bangalore IND',
        name:'Juspay',
        salary:'20-26Lpa',  
        applyby: '2024-01-21',
        skills:['React', 'NodeJS', 'JS', 'SQL', 'MongoDB', 'Express', 'AWS'],
        openings: 5,
        jobposted: '10/7/2023 12:43:48 pm',
        applicants: []
    },
    {   id: 4,
        type: 'Tech',
        designation: 'Cloud', 
        location: 'Bangalore IND',
        name:'Juspay',
        salary:'20-26Lpa',  
        applyby: '2024-01-21',
        skills:[ 'SQL', 'MongoDB', 'AWS', 'Kubernities'],
        openings: 5,
        jobposted: '10/7/2023 12:43:48 pm',
        applicants: []
    },
    {   id: 5,
        type: 'Tech',
        designation: 'front-end developer', 
        location: 'Bangalore IND',
        name:'paypal',
        salary:'20-26Lpa',  
        applyby: '2024-01-21',
        skills:['HTML','CSS', 'Javascript', 'React'],
        openings: 5,
        jobposted: '10/7/2023 12:43:48 pm',
        applicants: []
    },
    {   id: 6,
        type: 'Non-Tech',
        designation: 'Front-desk', 
        location: 'Bangalore IND',
        name:'Juspay',
        salary:'5-6Lpa',  
        applyby: '2024-01-21',
        skills:['Communication'],
        openings: 5,
        jobposted: '10/7/2023 12:43:48 pm',
        applicants: []
    },
  ];

export const jobName=(id) =>{
    let oupt
    jobs.filter(j=>{
        if(j.id == id) 
            oupt = j.name;
    })
    return oupt
}
export const renderJobs =() =>{
    return jobs;
}
export const searchjobName = (name) =>{
    let oupt = []
    jobs.filter(job=>{
        if(job.name == name)
            oupt.push(job)
    })
    return oupt
}
export const addApplicants = (data, id) =>{
    jobs.filter(job=>{
        if(id == job.id){
            job.applicants.push({ id:job.applicants.length+1, ...data});
        }
    })
}
export const jobbyId = (id) =>{
    return (jobs.find((j) => j.id == id));
}
export const addJob = (job) =>{
    let date = moment(job.applyby).format('DD-MM-YYYY');
    const data = {id: jobs.length+1, ...job, jobposted: moment(new Date().toISOString()).format('DD/MM/YYYY h:mm:ss a'), applicants: []}
    data.applyby = date;
    jobs.push(data);
}
export const modifyJob = (job, id) =>{
    const index = jobs.findIndex(j =>j.id == id)
    jobs[index] = job;
}
export const jobDetails = (i) =>{
    let oupt
    jobs.filter(j=>{
        if(j.id == i){
            oupt = {id: j.id, jobposted: j.jobposted, applicants: j.applicants }
        }
    })
    return oupt
}
export const deleteJob = (id)=>{
    const index = jobs.findIndex(j => j.id == id)
    jobs.splice(index, 1);
}
export const getApplicants=(id)=>{
    let oupt
    jobs.filter(job=>{
        if(job.id==id)
            oupt= job.applicants;
    })
    console.log(oupt);
    return oupt;
}