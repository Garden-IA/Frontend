'use client';

import Card from '../../../components/card/Card';
import { RiPlantFill } from 'react-icons/ri';
import { FaGear } from 'react-icons/fa6';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  const email = session?.user?.email;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card
          title="Datos"
          img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="profilePic"
          className="card"
          icon={<RiPlantFill className="h-8 w-8 mr-2" />}
        ></Card>
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
        ></Card>
      </div>
    </>
  );
}
