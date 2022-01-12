import './App.css';
import RenderLogo from './RenderLogo';
import MainSection from './MainSection';
import Footer from './Footer'
import Header from './images/header.png'
import RenderHeader from './RenderHeader';

function App() {
  return (
    <div className="App">
      <RenderHeader Header={Header} />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
