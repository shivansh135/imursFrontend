import React, { useEffect } from 'react';

export default function Success() {
  useEffect(() => {
    // Check if the page has been reloaded before
    const hasReloaded = localStorage.getItem('hasReloaded');

    // If it hasn't been reloaded, perform the reload and set the flag
    if (hasReloaded == 'false') {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <div>
      <h1>Welocome</h1>
    </div>
  );
}
