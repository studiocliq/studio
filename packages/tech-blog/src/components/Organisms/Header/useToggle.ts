import React, { useState } from 'react';

function useToggle(): [boolean, () => void] {
  const [toggle, setToggle] = useState<boolean>(false);
  
  function changeToggle() {
    setToggle((prev) => !prev);
  }

  return [toggle, changeToggle];
}

export default useToggle;
