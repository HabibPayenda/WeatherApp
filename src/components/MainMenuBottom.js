import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const MainMenuBottom = () => {
  const bottom = 'bottom';

  return (
    <div className="mainMenuBottom">
      {bottom}
      <div>
        <FontAwesomeIcon icon={solid('magnifying-glass')} />
        <p>Mostly Cloudy</p>
      </div>
      <div>
        <FontAwesomeIcon icon={solid('magnifying-glass')} />
        <p>Rain - 30%</p>
      </div>
      <div className="imgContainer">
        imgContainer
      </div>
    </div>
  );
};

export default MainMenuBottom;
