'use client';

import moment from 'moment';
import { getUserData } from '../../../utils/session';
import Card from '../../../components/card/Card';
import Button from '../../../components/button/Button';
import Alert from '../../../components/alert/Alert';
import { useEffect, useState } from 'react';
import Spinner from '../../../components/spinner/Spinner';
import Avatar from '../../../components/avatar/Avatar';

export default function Profile() {
  const userData = getUserData();

  // Datos del usuario
  const [id, setId] = useState(userData?.id);
  const [email, setEmail] = useState(userData?.email);
  const [lastLogin, setLastLogin] = useState(userData?.lastLogin);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setId(userData?.id);
    setEmail(userData?.email);
    setLastLogin(userData?.lastLogin);

    setIsLoading(false);
  }, [userData]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Prueba" className="card">
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>LastLogin: {moment(lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}</p>
          </Card>
          <Card title="Prueba" className="card">
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>LastLogin: {moment(lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}</p>
          </Card>
        </div>
        <Button className="btn btn-primary mb-4">Hola</Button>
        <Alert className="alert" title="Hola">
          {' '}
          <p>Esto es una prueba para ver como funcionan las alertas</p>
        </Alert>
      </>
    );
  }
}
