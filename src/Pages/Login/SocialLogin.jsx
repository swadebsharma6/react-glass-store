import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const { googleLogIn} = useContext(AuthContext);
    
    const handleSocialLogin =(media) =>{
        media()
        .then(res =>{
            const user = res.user;
            console.log('google user', user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="divider">continue with</div>
            <div className="">
                <button
                onClick={()=> handleSocialLogin(googleLogIn)}
                 className="btn btn-primary btn-sm">Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;