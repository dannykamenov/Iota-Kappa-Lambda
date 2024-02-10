import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import './Dashboard.css'
import DashboardComponent from './DashboardComponent';
import { useEffect } from 'react';


const Dashboard = () => {

    const { login, register, user, getOrganization } = useKindeAuth();

    useEffect(() => {
        if (user) {
            console.log(user);
            console.log(getOrganization())
        } else {
            console.log('no user');
        }
    }, [user]);

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