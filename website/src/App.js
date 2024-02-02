import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './containers/Home/Home';
import QRProject from './containers/Projects/QRProject/QRProject';
import ThePregames from './containers/Projects/ThePregames/ThePregames';
import NetDrive from './containers/Projects/NetDrive/NetDrive';
import Analytics from './containers/Projects/Analytics/Analytics';
import Resume from './containers/Resume/Resume';
import Experience from './containers/Experience/Experience';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="qrhunter" element={<QRProject />} />
          <Route path="thepregames" element={<ThePregames />} />
          <Route path="netdrive" element={<NetDrive />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="resume" element={<Resume />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
