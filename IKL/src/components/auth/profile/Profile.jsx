import './Profile.css';
import { useState, useEffect } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const Profile = () => {

    const { user } = useKindeAuth();
    if (!user) return null;
    console.log(user);

};

export default Profile;