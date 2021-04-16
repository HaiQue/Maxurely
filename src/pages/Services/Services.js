import React from 'react';
import { homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjFour} />
      <Pricing />
    </>
  );
};

export default Home;
