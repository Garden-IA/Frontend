'use client';

import { useEffect, useState } from 'react';
import { getProfile } from '../../utils/api';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p>Email: {profile.email}</p>
    </div>
  );
}
