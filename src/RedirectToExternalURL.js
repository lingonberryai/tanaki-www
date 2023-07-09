
// RedirectToExternalURL.js
import { useEffect } from 'react';

const RedirectToExternalURL = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]); // Triggered on URL change

  return null; // This component doesn't render anything
};

export default RedirectToExternalURL;
