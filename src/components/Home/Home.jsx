import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {

    const authInfo = useContext(AuthContext);

    return (
        <div>
            <h2 className="text-3xl">This is home</h2>
            <p className="text-xl font-bold">User: {authInfo.name}</p>
        </div>
    );
};

export default Home;