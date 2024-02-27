import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import './Dashboard.css'
import DashboardComponent from './DashboardComponent';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithCustomToken } from "firebase/auth";


const Dashboard = () => {

    const { isAuthenticated ,user } = useKindeAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
        if(user) {
            fetch('https://iota-kappa-lambda.onrender.com/api/generateCustomToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: user.id }),
            }).then((response) => response.json()).then((data) => {
                const { firebaseToken } = data;
                if(firebaseToken) {
                    const auth = getAuth();
                    signInWithCustomToken(auth, firebaseToken).then((userCredential) => {
                        const user = userCredential.user;
                    }).catch((error) => {
                        console.error('Error:', error);
                    });
                }
            }).catch((error) => {
                console.error('Error:', error);
            }); 
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