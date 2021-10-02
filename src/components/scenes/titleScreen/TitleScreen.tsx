import { useEffect } from 'react';

export default function TitleScreen() {
  useEffect(() => {
    document.addEventListener('keypress', function listener(event) {
      console.log(event.key);
      document.removeEventListener('keypress', listener);
    });
  }, []);

  return (
    <div className="title-screen">
      <h1>Game Name</h1>
      <div className="anim-container">
        <div className="sleeping">bird sleeping</div>
      </div>
    </div>
  );
}
