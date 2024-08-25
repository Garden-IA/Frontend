'use client';

import { getSession } from '../../utils/session';

export default function Profile() {
  const session = getSession();

  const name = session.user.name;
  const email = session.user.email;
  const image = session.user.image;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p>Email: {email}</p>
    </div>
  );
}
