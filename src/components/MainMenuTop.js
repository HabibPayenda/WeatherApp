import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const MainMenuTop = ({ degree, date }) => {
  const top = 'top';

  return (
    <div className="mainMenuTop">
      {top}
      <FontAwesomeIcon icon={solid('cloud')} size="4x" />
      <h1>
        {degree}
      </h1>
      <h2>
        {date}
      </h2>
    </div>
  );
};

MainMenuTop.propTypes = {
  degree: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default MainMenuTop;
