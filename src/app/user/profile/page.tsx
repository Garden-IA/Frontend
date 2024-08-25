'use client';

import moment from 'moment';
import { getUserData } from '../../../utils/session';

export default function Profile() {
  const userData = getUserData();

  const id = userData?.id;
  const email = userData?.email;
  const lastLogin = userData?.lastLogin;
  return (
    <>
      <div>ID: {id}</div>
      <div>Email: {email}</div>
      <div>LastLogin: {moment(lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}</div>
    </>
  );
}
