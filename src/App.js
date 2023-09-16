import { TanakiModel } from './TanakiModel'
import './App.css'

function App() {
  const shadow = {
    textShadow:
      '0 var(--text-shadow-offset-y) 10px #1D014C, 0 var(--text-shadow-offset-y) 20px #6600cc',
  }

  const glow = {
    textShadow:
      '0 var(--text-shadow-offset-y) 10px #ffffff, 0 var(--text-shadow-offset-y) 100px #FFC700',
  }

  return (
    <div className="container pt-4 mx-auto text-center main">
      <div className="flex justify-center">
        <TanakiModel />
      </div>

      <div className="flex flex-col text-white">
        <h1 className="pb-3 text-7xl" style={shadow}>
          Tanaki
        </h1>
        <h2 className="pb-8 text-5xl" style={shadow}>
          タナキ
        </h2>

        <span className="text-3xl" style={shadow}>
          Your creative superfriend.
        </span>

        <span className="block mt-2 text-xl text-black" style={glow}>
          With you, wherever you go.
        </span>
      </div>

      <div className="max-w-sm pt-10 mx-auto my-20 text-center">
        <img src="iphone-tanaki-show.png" alt="The Tanaki Show" />
        <span className="block pb-4 text-3xl text-white max-w-" style={shadow}>
          Watch The Tanaki Show.
        </span>
        <span className="p-8 text-2xl font-bold live">LIVE</span>
      </div>

      <div className="max-w-sm pt-10 mx-auto my-20 text-center">
        <img className="mb-2" src="paint.png" alt="The Tanaki Show" />
        <span className="text-4xl text-white " style={shadow}>
          Paint with Tanaki.
        </span>
      </div>

      <div className="max-w-sm pt-10 mx-auto my-20 text-center">
        <img className="mb-2" src="text.png" alt="The Tanaki Show" />
        <span className="text-4xl text-white" style={shadow}>
          Text Tanaki.
        </span>
      </div>

      <img className="pt-10" src="discord.png" alt="Discord" />
      <span className="text-4xl text-white" style={shadow}>
        Make friends and art in Discord.
      </span>

      <div className="pt-20 mx-auto my-20 text-center w-200">
        <img
          className="w-20 mx-auto mb-4"
          src="lingonberry-logo.svg"
          alt="Lingonberry Intelligence"
        />
        <span className="text-white " style={shadow}>
          Tanaki is brought to you by <br /> Lingonberry Intelligence.
        </span>
      </div>
    </div>
  )
}

export default App
