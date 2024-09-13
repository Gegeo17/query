import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Responsive = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  return (
    <div>
      {isMobile && <p>This is a mobile device.</p>}
      {isTablet && <p>This is a tablet.</p>}
      {isDesktop && <p>This is a desktop computer.</p>}
    </div>
  );
};

export default Responsive;
