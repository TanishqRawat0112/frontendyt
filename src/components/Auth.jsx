import "../index.css"
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Auth = ({setLogin,setIsUserLoggedIn}) => {
    const [showLogin, setShowLogin] = useState(true);
    return ( 
        <>
            <div className="auth-box">
                <div className="sign-options">
                    <div className="login" onClick={()=>setShowLogin(true)}>
                        LOGIN
                    </div>
                    <div className="sign-up" onClick={()=>setShowLogin(false)}>
                        SIGN UP
                    </div>
                </div>
                <div className="sign-body">
                    {
                        showLogin 
                        ?
                            <Login setLogin={setLogin} setIsUserLoggedIn={setIsUserLoggedIn}/> 
                        : 
                            <SignUp setLogin={setLogin} setIsUserLoggedIn={setIsUserLoggedIn}  />
                    }
                </div>
            </div>
        </>
     );
}
 
export default Auth;