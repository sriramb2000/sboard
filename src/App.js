import React from 'react';
import logo from './logo.svg';
import './App.css';
import SoundSquare from './Components/SoundSquare';
import SoundGrid from './Components/SoundGrid';

function App() {
  const arr = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "http://www.discoverysound.com/sample/0000119/01.mp3",
    "http://websitedesign.rohema-percussion.de/wp-content/uploads/2015/07/61680_mp3.mp3",
    "http://www.playinmusic.com/Samples/Dean%20Slap%20Best/BassSlap%20E%20127%204o.mp3",
    "http://mrclan.com/fastdl/tfc/sound/p3crain.wav",
    "http://biomediaproject.com/bmp/files/sfx/v2.0.0%20Streaming/Sound%20Effects/MNOLG/Hollow%20Punch.mp3",
    "http://cd.textfiles.com/sbsw/INSTRMNT/KALIMBA.WAV",
    "http://www.denhaku.com/r_box/sr16/sr16sd/pop%20shot.wav",
    "http://www.denhaku.com/r_box/sr16/sr16bd/lokik%20rm.wav",
    "http://www.egolikeness.com/lj/loops/loops2/install.wav",
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <SoundSquare soundUrl="../public/Audio/bell.mp3"/> */}
        {/* <SoundSquare color="green" soundUrl="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"/>
        <SoundSquare color="red" soundUrl="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"/> */}
        <SoundGrid rows={4} cols={3} data={arr}/>
      </header>
    </div>
  );
}

export default App;
