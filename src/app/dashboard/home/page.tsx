'use client';

import { getSession } from '../../../utils/session';

export default function Home() {
  const session = getSession();

  const email = session?.user?.email;
  return (
    <>
      <div>{email}</div>
    </>
  );
}
