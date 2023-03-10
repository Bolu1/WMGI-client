import jwt from 'jsonwebtoken'

const signToken = (user) =>{
    return jwt.sign({id: user._id, email: user.email},
        process.env.JWT_SECRET,{
            expiresIn: '30d',

        }
    )
}

const isAuth = async(req,res,next) =>{
    const {authorization} = req.headers
    if(authorization){
        // Bearer xxx
        const token = authorization.slice(7, authorization.length)
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) =>{
            if(err){
            res.status(401).send({message:"Token is not valid"})
        }else{
            req.user = decode
            next()
          }
        })
    }else{
        res.status(401).send({message:'Token is not supplied'})
    }
}

const isAdmin = async(req,res,next) =>{
    const {authorization} = req.headers
    if(authorization){
        // Bearer xxx
        const token = authorization.slice(7, authorization.length)
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) =>{
            if(err){
            res.status(401).send({message:"Token is not valid"})
        }else{
            if(!decode.isAdmin){
                res.status(401).send({message:'You don\'t this access'})
            }else{
                req.user = decode
                next()
            }
            
          }
        })
    }else{
        res.status(401).send({message:'Token is not supplied'})
    }
}

export {  signToken, isAuth, isAdmin }