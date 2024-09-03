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
import Divider from '../../../components/divider/Divider';

export default function Profile() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(session?.user);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(session?.user);
    user ? setIsLoading(false) : setIsLoading(true);
  }, [session]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card
            title="Datos"
            //img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            //imgAlt="profilePic"
            hasBtn={true}
            onClick={() => {
              console.log('Click');
            }}
            btnText="Guardar"
            btnClassName="btn-primary"
            className="card"
            hasBtnCancel={true}
            btnCancelOnClick={() => {
              console.log('Click');
            }}
            btnCancelClassName="btn-secondary"
            icon={<FaUser className="h-6 w-6 mr-2" />}
          >
            <div className="flex flex-row mb-4 gap-4">
              <Input id="email" label="Email" hasLabel={true} type="text" placeholder={user?.email} isDisabled={true} />
              <Input id="username" label="Username" hasLabel={true} type="text" placeholder={user?.id} />
            </div>
            <Input
              id="bio"
              label="Biography"
              hasLabel={true}
              type="textarea"
              placeholder={moment(user?.lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}
              className="mb-4"
            />
            <Divider className="mb-4" />

            <div className="flex flex-row flex-wrap mb-4 gap-4">
              <Input id="currentPassword" label="Current Password" hasLabel={true} type="password" placeholder={user?.email} />
              <Input id="newPassword" label="New Password" hasLabel={true} type="password" placeholder={user?.id} />
              <Input id="confirmPassword" label="Confirm Password" hasLabel={true} type="password" placeholder={user?.id} />
            </div>

            <Divider className="mb-4" />

            <div className="flex flex-row mb-4 gap-4">
              <Input id="firstName" label="First Name" hasLabel={true} type="text" placeholder={user?.email} />
              <Input id="lastName" label="Last Name" hasLabel={true} type="text" placeholder={user?.email} />
            </div>

            <div className="flex flex-row mb-4 gap-4">
              <Input id="name" label="Name" hasLabel={true} type="text" placeholder={user?.email} />
              <Input id="lastName" label="Last Name" hasLabel={true} type="text" placeholder={user?.email} />
            </div>

            <Input
              id="lastLogin"
              label="Last Login"
              hasLabel={true}
              type="text"
              placeholder={moment(user?.lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}
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
            icon={<FaGear className="h-6 w-6 mr-2" />}
          >
            <ThemeToggle></ThemeToggle>
            <Input id="id" label="ID" hasLabel={true} type="text" placeholder={user?.id} isDisabled={true} className="mb-4" />
            <Input id="email" label="Email" hasLabel={true} type="text" placeholder={user?.email} isDisabled={true} className="mb-4" />
            <Input
              id="lastLogin"
              label="Last Login"
              hasLabel={true}
              type="text"
              placeholder={moment(user?.lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}
              isDisabled={true}
              className="mb-4"
            />
            <Input id="id" label="ID" hasLabel={true} type="text" placeholder={user?.id} isDisabled={true} className="mb-4" />
            <Input id="email" label="Email" hasLabel={true} type="text" placeholder={user?.email} isDisabled={true} className="mb-4" />
            <Input
              id="lastLogin"
              label="Last Login"
              hasLabel={true}
              type="text"
              placeholder={moment(user?.lastLogin, 'DD-MM-YYYY HH:mm:ss').toString()}
              isDisabled={true}
              className="mb-4"
            />
          </Card>
        </div>
      </>
    );
  }
}
