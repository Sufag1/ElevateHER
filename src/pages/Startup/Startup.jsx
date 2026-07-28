import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StartupDetail from '../../components/StartupDetail/StartupDetail';

const Startup = () => {
  const { name } = useParams();

  return (
    <div className="startup-page container">
      <Link to="/about">← Back to Portfolio</Link>
      <StartupDetail slug={name} />
    </div>
  );
};

export default Startup;
