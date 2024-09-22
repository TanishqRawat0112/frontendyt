import  { useState } from 'react';
import hitRequest from '../../api/hitRequest';
import icon from '../../assets/temp.jpeg';
import { Link } from 'react-router-dom';
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        if(!oldPassword || !newPassword || !confirmNewPassword){
            console.log("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append('oldPassword',oldPassword);
        formData.append('newPassword',newPassword);
        formData.append('confirmPassword',confirmNewPassword);


        const response = await hitRequest('/users/change-password','POST',formData);
        if(response.statusCode === 200){
            alert('Password changed successfully');
        }
    }
    return ( 
        <div className="login-body">
            <div className="login-show">
                <img className='login-show-icon' src={icon} alt="icon" />
                <div className="login-show-data">
                    <h1>
                        Change Password
                    </h1>
                    <h4>
                        and continue enjoying the service
                    </h4>
                </div>
            </div>
            <div className="login-form">
                <form action="">
                    <h3>
                        Old Password
                    </h3>
                    <input type="password" placeholder='Enter Email' name='email' id='email' className='login-form-input' onChange={(e) => setOldPassword(e.target.value)}/>
                    <h3>
                        New Password
                    </h3>
                    <input type="password" placeholder='Enter password' name='password' id='password' className='login-form-input' onChange={(e) => setNewPassword(e.target.value)}/>
                    <h3>
                        Confirm New Password
                    </h3>
                    <input type="password" placeholder='Enter password' name='password' id='password' className='login-form-input' onChange={(e) => setConfirmNewPassword(e.target.value)}/>

                    <div className='login-form-submit'>
                        <div className='login-submit-clear'>
                            Clear
                        </div>
                        <div className='login-submit-submit' onClick={handleFormSubmit}>
                            <Link to='/'>
                                Change
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ChangePassword;