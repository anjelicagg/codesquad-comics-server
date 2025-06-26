const users[];
 const register = async(req,res,next)=> {
      const {firstName,lastName,username,password}=request.body;
         console.log(register);
    try{
    const newUser ={
        
            firstName:"",
            lastName:"",
            username:"",
            password:"",
    };
    console.log(newUser,"New user registered");
     
    
        res.status(201).json({
            success:{ message: "User logged in"},
            data: {newUser},
            statusCode:(201),});
        }catch(error){
            next(error)
        };

      const login = async( req,res,next)=>{
        const {username,password}=req.body   
    }; 
const logout = async (req,res,next)=>{
   res.status(200).json({
    success:{message:"Initializing logout controller logic..."},
    statusCode:200,
})
function sessionDestruction (err){
    if (err)
        return next (err);
}
sessionDestruction();
console.log("Logout function activate.Logging out")
};
const localLogin= async (req,res,next)=>{
    let result = true
    const user=users;
    console.log(user,"before");
    userCopy=user;
    console.log(userCopy, "copy of user ");

    function mockPassport(err, user) {
        //error handling as a final check and a failsafe
        if (err) {
          return next(err);
         }
        }
        //call the mockPassport feature
        mockPassport();

        response.status(200).json({
            success:{message: "Login successful"},
            data:{user,new},
        })
};
}
module.exports={register,login,logout}