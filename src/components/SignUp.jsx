// import { set } from 'mongoose';
import icon from '../assets/temp.jpeg';
import { useState } from 'react';
const Signup = ({setLogin}) => {
    const [next, setNext] = useState(false);
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const handleAvatarUpload = (e) => {
        setAvatar(e.target.files[0]);
        console.log("Avatar : ",e.target.files[0]);
    }

    const handleCoverImageUpload = (e) => {
        setCoverImage(e.target.files[0]);
        console.log("Cover Image : ",e.target.files[0]);
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault();

        if(!fullname || !username || !email || !password || !confirmPassword || !avatar || !coverImage){
            // alert("All fields are required");
            return;
        }

        if(password !== confirmPassword){
            // alert("Passwords do not match");
            return;
        }

        const formData = new FormData();
        formData.append('fullname',fullname);
        formData.append('username',username);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('avatar',avatar);
        formData.append('coverImage',coverImage);

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/register',{
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if(data.statusCode === 201){
                // alert('User registered successfully');
                setLogin(false);
            }
        }catch(error){
            console.log("Error while sending the FE req : ",error);
        }
    }

    return ( 
        <div className="signup-body">
            <div className="signup-show">
                <img className='signup-show-icon' src={icon} alt="icon" />
                <div className="signup-show-data">
                    <h1>
                        SignUp
                    </h1>
                </div>
            </div>
            <div className="signup-form">
                <form action="">
                {!next ? 
                    <>
                    <div className="signup-form-left">
                            <h3>
                                Full Name
                            </h3>
                            <input type="text" placeholder='Enter Your Full Name' name='fullname' id='fullname' className='login-form-input' onChange={(e) => setFullname(e.target.value)}/>
                            <h3>
                                Username
                            </h3>
                            <input type="text" placeholder='Enter username' name='username' id='username' className='login-form-input' onChange={(e) => setUsername(e.target.value)}/>
                            <h3>
                                Email
                            </h3>
                            <input type="text" placeholder='Enter Email' name='email' id='email' className='login-form-input' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="signup-form-right">
                            <h3>
                                Password
                            </h3>
                            <input type="password" placeholder='Enter password' name='password' id='password' className='login-form-input' onChange={(e) => setPassword(e.target.value)}/>
                            <h3>
                                Confirm Password
                            </h3>
                            <input type="password" placeholder='Confirm password' name='confirmPassword' id='confirmPassword' className='login-form-input' onChange={(e) => setConfirmPassword(e.target.value)}/>

                            <div className='signup-form-submit'>
                                <div className='signup-submit-clear'>
                                    Clear
                                </div>
                                <div className='signup-submit-next' onClick={()=>setNext(true)}>
                                    Next
                                </div>
                            </div>
                        </div>
                    </>
                :
                    <>
                        <div className="signup-form-left">
                            <h3>
                                Avatar
                            </h3>
                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleAvatarUpload} />
                        </div>
                        <div className="signup-form-right">
                            <h3>
                                Cover Image
                            </h3>
                            <input type="file" id="coverImage" name="coverImage" accept="image/png, image/jpeg" onChange={handleCoverImageUpload} />

                            <div className='signup-form-submit-next'>
                                <div className='signup-submit-clear' onClick={()=>setNext(false)}>
                                    Back
                                </div>
                                <div className='signup-submit-next' onClick={handleFormSubmit}>
                                    Submit
                                </div>
                            </div>
                        </div>
                    </>
                    }
                </form>
            </div>
        </div>
     );
}
 
export default Signup;