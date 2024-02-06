import './Profile.css';
import { useEffect } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { createUser } from '@/components/api/userApi';

const Profile = () => {
    const { user } = useKindeAuth();

    useEffect(() => {
        if (user) {
            const name = `${user.given_name} ${user.family_name}`
            const userData = {
                name,
                email: user.email,
                role: 'user',
            };
            createUser(userData).then(response => {
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
