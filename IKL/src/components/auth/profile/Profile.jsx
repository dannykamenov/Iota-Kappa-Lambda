import './Profile.css';
import { useEffect, useRef, useState } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { createUser } from '@/components/api/userApi';

const Profile = () => {
    const { user } = useKindeAuth();
    const [processed, setProcessed] = useState(false);
    const requestSentRef = useRef(false);

    useEffect(() => {
        if (user && !requestSentRef.current) {
            requestSentRef.current = true;
            const name = `${user.given_name} ${user.family_name}`
            const userData = {
                name,
                email: user.email,
                role: 'user',
            };
            createUser(userData).then(response => {
                setProcessed(true);
                console.log(response.message);
            }).catch(err => {
                console.error('Error creating user:', err);
            });
        }
    }, [user]); 

    if (!user) return null;

    return (
        <div className="profile-page">
            {/* Your profile page content here */}
            <h1>Welcome, {user.name}</h1>
        </div>
    );
};

export default Profile;
