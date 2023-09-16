import { TanakiModel } from './TanakiModel';
import './App.css';

function App() {
  const shadowStyle = {
    textShadow: '0 var(--text-shadow-offset-y) 10px #1D014C, 0 var(--text-shadow-offset-y) 20px #6600cc', 
  };
  

  return (
    <div className='container pt-4 mx-auto text-center main'>
      <div className='flex justify-center'>
        <TanakiModel />
      </div>

    

      <div className='flex flex-col text-white'>
        <h1 className='pb-3 text-7xl' style={shadowStyle}>
          Tanaki
        </h1>
        <h2 className='pb-8 text-5xl' style={shadowStyle}>
          タナキ
        </h2>

        <span className='text-3xl' style={shadowStyle}>
          Your creative superfriend.
        </span>
        
        <span className='block mt-2 text-xl' style={shadowStyle}>
          Wherever you go, Tanaki is there for you.
        </span>
      </div>

      <div className="max-w-sm pt-10 mx-auto my-20 text-center"> 
        <img src="show.png" alt="The Tanaki Show" />
        <span className='block max-w-sm pb-4 text-4xl text-white' style={shadowStyle}>
          Watch  The Tanaki Show
        </span>
        
        <span className='p-8 text-2xl font-bold live'>LIVE</span>
      </div>

      <div className="max-w-sm pt-10 mx-auto my-20 text-center"> 
        <img src="show.png" alt="The Tanaki Show" />
        <span className='text-4xl text-white' style={shadowStyle}>
          Paint with Tanaki.
        </span>
  
      </div>

      <div className="max-w-sm pt-10 mx-auto my-20 text-center"> 
        <img src="show.png" alt="The Tanaki Show" />
        <span className='text-4xl text-white' style={shadowStyle}>
          Text Tanaki.
        </span>
      </div>

      <img className="pt-10" src="discord.png" alt="Discord" />
      <span className='text-4xl text-white' style={shadowStyle}>
        Make new friends and art in Discord.
      </span>

      <div className='pt-20 mx-auto my-20 text-center w-200'>
        <img className="w-20 mx-auto mb-4" src="lingonberry-logo.svg" alt="Lingonberry Intelligence" />
        <span className='text-white ' style={shadowStyle}>Tanaki is brought to you by <br/> Lingonberry Intelligence.</span>
      </div>
    </div>
    
  );
}

export default App;
