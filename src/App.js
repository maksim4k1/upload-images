import UploadButton from './components/UploadButton';
import Image from './components/Image';
import Buttons from './components/Buttons';
import './styles/App.css';
import { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);

  async function changeImage(image){
    setLoader(true);
    const base64 = await convertImageToBase64(image);
    setLoader(false);
    setImage(base64);
  }

  function convertImageToBase64(image){
    if(image){
      return new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);

        fileReader.onload = () => {
          res(fileReader.result);
        }

        fileReader.onerror = (error) => {
          rej(error);
        }
      });
    }
  }

  return (
    <div className="App container">
      <UploadButton changeImage={changeImage}/>
      <Image image={image} loader={loader}/>
      <Buttons image={image}/>
    </div>
  );
}

export default App;