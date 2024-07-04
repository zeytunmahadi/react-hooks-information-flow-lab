

import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';
import Header from './Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;