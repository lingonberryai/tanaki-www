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

      <div className='text-white'>
        {/* Apply the text shadow variable to your text elements */}
        <h1 className='pb-3 text-7xl' style={shadowStyle}>
          Tanaki
        </h1>
        <h2 className='pb-8 text-5xl' style={shadowStyle}>
          タナキ
        </h2>

        <span className='text-3xl' style={shadowStyle}>
          Your creative superfriend.
        </span>
        <br />
        <span className='block pt-2 text-xl' style={shadowStyle}>
          Wherever you go, Tanaki is there for you.
        </span>
      </div>

      <img className="max-w-md pt-10" src="show.png" alt="The Tanaki Show" />

      <img className="pt-10" src="discord.png" alt="Discord" />
      <span className='text-2xl text-white' style={shadowStyle}>
        Make friends and art in Discord.
      </span>
    </div>
  );
}

export default App;
