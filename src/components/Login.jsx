import icon from '../assets/temp.jpeg';
import { useState } from 'react';

const Login = ({setLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        if(!email || !password){
            // alert("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append('email',email);
        formData.append('password',password);


        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login',{
                method: 'POST',
                credentials: 'include',
                body: formData,
            });

            const data = await response.json();
            if(data.statusCode === 200){
                // alert('User logged In successfully');
                setLogin(false);
            }
        } catch (error) {
            console.log("Error : ",error);
        }
    }
    return ( 
        <div className="login-body">
            <div className="login-show">
                <img className='login-show-icon' src={icon} alt="icon" />
                <div className="login-show-data">
                    <h1>
                        Login
                    </h1>
                    <h4>
                        to continue to service
                    </h4>
                </div>
            </div>
            <div className="login-form">
                <form action="">
                    <h3>
                        Email
                    </h3>
                    <input type="text" placeholder='Enter Email' name='email' id='email' className='login-form-input' onChange={(e) => setEmail(e.target.value)}/>
                    <h3>
                        Password
                    </h3>
                    <input type="password" placeholder='Enter password' name='password' id='password' className='login-form-input' onChange={(e) => setPassword(e.target.value)}/>

                    <div className='login-form-submit'>
                        <div className='login-submit-clear'>
                            Clear
                        </div>
                        <div className='login-submit-submit' onClick={handleFormSubmit}>
                            Login
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;