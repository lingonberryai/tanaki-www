import { TanakiModel } from './TanakiModel'
import './App.css'
import ThoughtText from './ThoughtText'

function App() {
  return (
    <div className="container mx-auto text-center main relative">
      <div className="flex justify-center">
      <iframe title="Tanaki Web Room" allow="autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;midi;geolocation;" src="https://vdo.ninja/?scene&room=tanaki_webroom_test" width="1080" height="1920"></iframe>
      </div>
      <div className="thought-bubble">
        <ThoughtText text="Thinking up dynamic insights for your next TikTok LIVE ..." />
      </div>
      <div className="tanaki-model">
        <TanakiModel />
      </div>
    </div>
      
  )
}

export default App
