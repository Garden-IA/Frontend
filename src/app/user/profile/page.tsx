'use client';

import moment from 'moment';
import Card from '../../../components/card/Card';
import Button from '../../../components/button/Button';
import Alert from '../../../components/alert/Alert';
import { useEffect, useState } from 'react';
import Spinner from '../../../components/spinner/Spinner';
import Avatar from '../../../components/avatar/Avatar';
import Input from '../../../components/input/Input';
import ThemeToggle from '../../../components/themeToggle/ThemeToggle';
import { FaGear } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session, status } = useSession();

  // Datos del usuario
  const [id, setId] = useState(session?.user?.id);
  const [email, setEmail] = useState(session?.user?.email);
  const [lastLogin, setLastLogin] = useState(session?.user?.lastLogin);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setId(session?.user?.id);
    setEmail(session?.user?.email);
    setLastLogin(session?.user?.lastLogin);

    setIsLoading(false);
  }, [session]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card
            title="Datos"
            img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt="profilePic"
            className="card"
            icon={<FaUser className="h-8 w-8 mr-2" />}
          >
            <Input id="id" label="ID" hasLabel={true} type="text" placeholder={id} isDisabled={true} className="mb-4" />
            <Input id="email" label="Email" hasLabel={true} type="text" placeholder={email} isDisabled={true} className="mb-4" />
            <Input
              id="lastLogin"
              label="Last Login"
              hasLabel={true}
              type="text"
              placeholder={moment(lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}
              isDisabled={true}
              className="mb-4"
            />
          </Card>
          <Card
            title="Settings"
            hasBtn={true}
            onClick={() => {
              console.log('Click');
            }}
            btnText="Textooo"
            btnClassName="btn-primary"
            className="card"
            hasBtnCancel={true}
            btnCancelOnClick={() => {
              console.log('Click');
            }}
            btnCancelClassName="btn-secondary"
            icon={<FaGear className="h-8 w-8 mr-2" />}
          >
            <ThemeToggle></ThemeToggle>
            <Input id="id" label="ID" hasLabel={true} type="text" placeholder={id} isDisabled={true} className="mb-4" />
            <Input id="email" label="Email" hasLabel={true} type="text" placeholder={email} isDisabled={true} className="mb-4" />
            <Input
              id="lastLogin"
              label="Last Login"
              hasLabel={true}
              type="text"
              placeholder={moment(lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}
              isDisabled={true}
              className="mb-4"
            />
            <Input id="id" label="ID" hasLabel={true} type="text" placeholder={id} isDisabled={true} className="mb-4" />
            <Input id="email" label="Email" hasLabel={true} type="text" placeholder={email} isDisabled={true} className="mb-4" />
            <Input
              id="lastLogin"
              label="Last Login"
              hasLabel={true}
              type="text"
              placeholder={moment(lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}
              isDisabled={true}
              className="mb-4"
            />
          </Card>
        </div>
      </>
    );
  }
}
