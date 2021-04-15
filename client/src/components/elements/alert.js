import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const Alertex = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss} style={{opacity:props.opacity}}>
      {props.children}
    </Alert>
  );
}

export default Alertex;