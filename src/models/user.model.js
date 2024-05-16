export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  users.push({id:users.length+1, ...user});
};

export const authenticateUser = (reqUser) => {
  let oupt = false
  users.filter(user =>{
    if(user.email == reqUser.email && user.password == reqUser.password)
        oupt = true
  })
  return oupt
};
