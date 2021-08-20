import UploadButton from './components/UploadButton';
import Image from './components/Image';
import Buttons from './components/Buttons';
import './styles/App.css';

function App() {
  return (
    <div className="App container">
      <UploadButton/>
      <Image/>
      <Buttons/>
    </div>
  );
}

export default App;