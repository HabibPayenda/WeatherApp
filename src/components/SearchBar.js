import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SearchBar = () => {
  const search = 'search';

  return (
    <div className="searchInput">
      <FontAwesomeIcon icon={solid('magnifying-glass')} />
      <input type="text" value={search} aria-label="search" />
      <FontAwesomeIcon icon={solid('close')} />
    </div>
  );
};

export default SearchBar;
