import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';

import GlobalStyle from './src/Globalstyle';

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  const ConnectedRootElement = (
    <>
      <GlobalStyle />
      {element}
    </>
  );

  return ConnectedRootElement;
};