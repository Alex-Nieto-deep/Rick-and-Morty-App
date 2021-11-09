import { useState } from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(true);

  return [darkMode, setDarkMode];
}

export default useDarkMode;