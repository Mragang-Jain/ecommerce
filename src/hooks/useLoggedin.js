import { useState} from 'react'

const useLoggedin = () => {
    const [isLoggedin, setIsLoggedin] = useState(false)
    console.log("isLoggedin", isLoggedin)
    // useEffect(()=>{
    //  let token  = localStorage.getItem('token')
    //  if(token){
    //      setIsLoggedin(true)
    //      console.log("setIsLoggedin", true)
    //  }
    // })
    // console.log("AS",isLoggedin)
    const isLogin = () => {
        let token = localStorage.getItem('token')
        if (token) {
            return true
        }
        return false
    }
    return ([
        isLogin,
        isLoggedin,
        setIsLoggedin
    ])
}

export default useLoggedin
