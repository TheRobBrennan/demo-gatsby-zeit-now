import React from 'react';
import config from '../../config';

// Components
import NavBar from './NavBar';

const Header = props => {
  // Only display the subheading if explicitly provided (e.g. displaySubheading={true})
  const { displaySubheading } = props;

  return (
    <header id='header'>
      <NavBar title={config.heading} />
      {displaySubheading && <p>{config.subHeading}</p>}
    </header>
  );
};
export default Header;