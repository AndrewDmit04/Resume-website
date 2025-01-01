import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Sections from './components/Sections';

function App() {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to update cursor position based on mouse movement
  // const handleMouseMove = (e) => {
  //   setCursorPosition({ x: e.clientX, y: e.clientY });
  // };

  // Attach the mouse move event listener
  // useEffect(() => {
  //   document.addEventListener('mousemove', handleMouseMove);
  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);
  
  return (
      <div className="container-fluid content-container">
              {/* <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      /> */}
        <div className='row h-100'>
          <Profile/>
          <Sections/>
        </div>        
      </div>
  );
}

export default App;
