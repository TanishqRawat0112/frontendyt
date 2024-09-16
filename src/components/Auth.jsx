import "../index.css"
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Auth = () => {
    const [login, setLogin] = useState(true);
    return ( 
        <>
            <div className="auth-box">
                <div className="sign-options">
                    <div className="login" onClick={()=>setLogin(true)}>
                        LOGIN
                    </div>
                    <div className="sign-up" onClick={()=>setLogin(false)}>
                        SIGN UP
                    </div>
                </div>
                <div className="sign-body">
                    {
                        login 
                        ?
                            <Login /> 
                        : 
                            <SignUp />
                    }
                </div>
            </div>
        </>
     );
}
 
export default Auth;