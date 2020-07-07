import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container borderdiv'>

        <div className='part1'>
          <div className='hinhanhpart1'>
            <img className='imgPart1' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
        </div>

        <div className='part2'>
          <div className='hinhanhpart2'>
            <img className='imgPart2' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
          <div className='hinhanhpart2 second'>
            <img className='imgPart2 second' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
        </div>


        <div className='part3'>
          <div className='hinhanhpart3'>
            <img className='imgPart3 first' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
          <div className='hinhanhpart3'>
            <img className='imgPart3 second' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
          <div className='hinhanhpart3'>
            <img className='imgPart3 thirst' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
        </div>


        <div className='part4'>
          <div className='hinhanhpart4'>
            <img className='imgPart4 first' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
          <div className='hinhanhpart4'>
            <img className='imgPart4 second' src='https://app.xomad.com/static_app2/sa/1e06c8573a1eaba91b4e7182c4f8d0df.jpg'></img>
          </div>
        </div>


        <div className='center5'>
          <div className='imgPart5'>
            <img className='imgcenter' src={require('./img/center.PNG')}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
