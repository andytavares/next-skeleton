import React, { Fragment } from 'react';
import { Alert, Button } from 'react-bootstrap';
const Home: React.FC = () => {
  return (
    <Fragment>
      <Button variant="primary">Test</Button>
      <Button variant="secondary">Test</Button>
      <Button variant="success">Test</Button>
      <Button variant="danger">Test</Button>
      <Button variant="warning">Test</Button>
      <Button variant="info">Test</Button>
      <Button variant="light">Test</Button>
      <Button variant="dark">Test</Button>
    </Fragment>
  );
};

export default Home;
