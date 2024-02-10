import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import './Dashboard.css'
import DashboardComponent from './DashboardComponent';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const { isAuthenticated } = useKindeAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    });

    return (
        <>
            <h1 className="w-1/4 my-5 mx-auto p-10 text-4xl text-center font-bold small:w-full medium:w-3/4 xl:w-1/2 ">Add Event</h1>
            <div className=" w-1/3 my-5 mx-auto small:w-full medium:w-3/4 xl:w-1/2">
                <DashboardComponent />
            </div>
        </>
    )
};

export default Dashboard;