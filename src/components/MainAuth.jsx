import Auth from './Auth';
import Extra from './Extra';
const MainAuth = ({setLogin}) => {
    return ( 
        <div className="auth-bg">
            <Auth setLogin={setLogin} />
            <Extra />
    </div>
     );
}
 
export default MainAuth;