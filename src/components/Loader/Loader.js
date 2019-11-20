import React from 'react'
import { Loader } from 'semantic-ui-react';
import './LoaderStyles.css';

const LoaderOne = () => (
  <div className="loaderWrap">
      <Loader size='massive' active inverted/>
  </div>
);

export default LoaderOne;