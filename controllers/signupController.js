export default async function signupController(req,res){
    try{
    const {email,username,password} = req.body
    let userExists = await Users.findOne({email})
    if(userExists){
       return res.json({"message":"User already Exists"})
    }
    userExists = await Users.findOne({username})
    if(userExists){
       return res.json({"message":"Username exists"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    let createUser = await Users.create({
        email,username,password:hashedPassword
    })
    if(createUser){
        createUser.password = undefined
       return res.json({"message":"Success","user":createUser})
    }
    res.json({"message":"Something went wrong","email":email})}
    catch(e){
        res.json({"message":e.message})
    }
}