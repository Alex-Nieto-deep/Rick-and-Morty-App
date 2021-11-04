import React, { useState } from 'react';


function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  return [darkMode, setDarkMode];
}

export default useDarkMode;