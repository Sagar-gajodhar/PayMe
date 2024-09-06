const jwt = require("jsonwebtoken");
const {JWT_P} = require("../config");

function authmiddleware(req,res,next)
{
    const auth  = req.headers.authorization;
    if( !auth || !auth.startsWith("Bearer "))
        {
            return res.status(403).json({ messsage : "Token error"});
        }
    const token  = auth.split(' ')[1];

    try{
        const decode = jwt.verify(token,JWT_P);
        req.userId = decode.userId;
        next();
    }
    catch(err)
    {
        return res.status(403).json({})
    }
}

module.exports = authmiddleware
