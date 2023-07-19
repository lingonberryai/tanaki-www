import './App.css';

function App() {
  return (
    <div className='container pt-4 mx-auto text-center main'>
      <img src='tanaki-hero.png' className='mx-auto h-auto max-h-[90vh] w-auto max-w-full' alt="Tanaki Paint" />
      
      <h1 className='pb-3 text-6xl'>Tanaki</h1>
      <h2 className='pb-8 text-4xl'>タナキ</h2>

      <p className='text-2xl'>A new friend, from the creator of <a className="underline" href="https://tiktok.com/@molabsai">MO</a>.</p>

      <a href="/download" className="inline-block p-4 mt-8 text-2xl font-semibold text-white bg-pink-600 rounded-xl">Download Early Beta!</a>

      <div className="pt-8 max-w-sm mx-auto mt-5 text-xl text-center text-pink-600 px-2vw pb-[2vh]"> 
        Tanaki is free to use under a <a className="underline" href="https://lingonberryai.notion.site/Creative-Commons-1ad8a5b4979c4faa932dd048639d459c">Creative Commons License.</a>
      </div>

      <div className='py-4 text-lg underline'><a href="https://discord.gg/fr6X7r4CTX">Discord</a></div>
      <a href="https://lingonberry.ai">
        <img src='lingonberry-logo.svg' className='mx-auto h-auto max-h-[10vh] w-16 p-3' alt="Lingonberry AI" />
      </a>
    </div>
  );
}

export default App;
