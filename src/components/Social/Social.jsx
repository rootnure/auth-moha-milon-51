import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Social = () => {

    const { googleLogIn, githubLogIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSocialLogIn = media => {
        media()
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogIn(googleLogIn)}
                    className="btn btn-neutral btn-sm">Google</button>
                <button
                    onClick={() => handleSocialLogIn(githubLogIn)}
                    className="btn btn-neutral btn-sm">Github</button>
            </div>
        </div>
    );
};

export default Social;