import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const Root = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>   
        </>
    );
};

export default Root;