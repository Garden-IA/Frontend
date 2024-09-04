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
      <div className="flex flex-row flex-wrap gap-4 mb-4 w-full">
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card title="Datos" className="grow min-w-full md:min-w-96 card" icon={<RiPlantFill className="h-8 w-8 mr-2" />}>
          adad
        </Card>
        <Card
          title="Settings"
          hasBtn={true}
          onClick={() => {
            console.log('Click');
          }}
          btnText="Textooo"
          btnClassName="btn-primary"
          className="grow min-w-full md:min-w-96 card"
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
