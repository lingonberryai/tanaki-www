import { TanakiModel } from './TanakiModel'
import './App.css'
import { handleImageError } from './imageUtils' // Import image utility function
import ThoughtText from './ThoughtText'

function App() {
  return (
    <div className="container mx-auto text-center main">
      <div className="flex justify-center">
        <ThoughtText text="Thinking up dynamic insights for your next TikTok LIVE ..." />
      </div>
      <div className="flex justify-center">
        <TanakiModel />
      </div>
      
      {/* <div class="thought-bubble">
          <p>
            Your thoughtful text here, pondering the mysteries of the universe
            or just what to have for lunch.
          </p>
      </div> */}

      <div className="flex flex-col text-white">
        <h1 className="pb-3 shadow text-7xl">Tanaki</h1>
        <h2 className="pb-8 text-5xl shadow">タナキ</h2>

        <span className="text-3xl shadow">Your creative superfriend.</span>

        <span className="block mt-2 text-xl text-white shadow">
          With you, wherever you go.
        </span>
      </div>

      <div className="my-16">
        <a
          href="/download"
          className="inline-block p-5 mx-auto text-4xl font-bold text-center text-black bg-white rounded-full download-button"
        >
          Get Tanaki
        </a>
      </div>

      <a className="big-link" href="https://tiktok.com/@hellotanaki">
        <div className="max-w-sm pt-10 mx-auto my-20 text-center">
          <img
            src="iphone-tanaki-show.webp"
            alt="The Tanaki Show"
            loading="lazy"
            onError={handleImageError('/iphone-tanaki-show.png')} // Pass fallback image
          />
          <span className="block pb-4 text-3xl text-white shadow max-w-">
            Watch The Tanaki Show.
          </span>
          <span className="p-8 text-2xl font-bold live">LIVE</span>
        </div>
      </a>

      <br />

      <a className="big-link" href="/download">
        <div className="max-w-sm pt-10 mx-auto my-20 text-center">
          <img
            className="mb-2"
            src="paint.webp"
            alt="Tanaki Paint App"
            loading="lazy"
            onError={handleImageError('/paint.png')} // Pass fallback image
          />
          <span className="text-4xl text-white shadow">Paint with Tanaki.</span>
        </div>
      </a>

      <br />

      <div className="max-w-sm pt-10 mx-auto my-20 text-center">
        <img
          className="mb-2"
          src="text.webp"
          alt="The Tanaki Show"
          onError={handleImageError('/text.png')} // Pass fallback image
        />
        <span className="text-4xl text-white shadow">Text Tanaki.</span>
      </div>

      <br />

      <a className="big-link" href="/download">
        <img
          className="pt-10"
          src="discord.webp"
          alt="Discord"
          onError={handleImageError('/discord.png')} // Pass fallback image
        />
        <span className="text-4xl text-white shadow">
          Make friends and art in Discord.
        </span>
      </a>

      <br />
      <br />
      <br />
      <a
        href="/download"
        className="inline-block p-10 mx-auto my-20 text-5xl font-bold text-center text-black bg-white rounded-full download-button"
      >
        Get Tanaki
      </a>

      <br />

      <a className="lingonberry" href="https://lingonberry.ai">
        <div className="pt-20 mx-auto my-20 text-center w-200">
          <img
            className="w-20 mx-auto mb-4"
            src="lingonberry-logo.svg"
            alt="Lingonberry Intelligence"
          />

          <span className="text-white shadow">
            Tanaki is brought to you by <br /> Lingonberry Intelligence.
          </span>
        </div>
      </a>
      <div className="flex-row max-w-md pb-12 mx-auto space-x-8 text-white shadow">
        <a href="mailto:pasquale@altbizney.com">contact</a>
        <a href="https://psql.notion.site/Privacy-bd91b1b93d3c41998322792ef9968f3f?pvs=4">
          privacy
        </a>
        <a href="https://twitter.com/hellotanaki">twitter</a>
        <a href="https://tiktok.com/@hellotanaki">tiktok</a>
      </div>
    </div>
  )
}

export default App
