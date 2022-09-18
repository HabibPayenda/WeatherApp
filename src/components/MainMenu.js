import React from 'react';
import MainMenuTop from './MainMenuTop';
import SearchBar from './SearchBar';

const MainMenu = () => {
  const hello = 'hello';

  return (
    <div className="mainMenu">
      <SearchBar />
      <MainMenuTop degree="18" date="Monday" />
      {hello}
    </div>
  );
};

export default MainMenu;
