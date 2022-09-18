import React from 'react';
import SearchBar from './SearchBar';

const MainMenu = () => {
  const hello = 'hello';

  return (
    <div className="mainMenu">
      <SearchBar />
      {hello}
    </div>
  );
};

export default MainMenu;
