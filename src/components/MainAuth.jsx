import Auth from './Auth';
import Extra from './Extra';
const MainAuth = ({setLogin,setIsUserLoggedIn}) => {
    return ( 
        <div className="auth-bg">
            <Auth setLogin={setLogin} setIsUserLoggedIn={setIsUserLoggedIn} />
            <Extra />
    </div>
     );
}
 
export default MainAuth;