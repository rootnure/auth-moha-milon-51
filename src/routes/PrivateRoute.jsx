import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='h-36 flex justify-center items-center'><span className="loading loading-dots loading-lg"></span></div>
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;