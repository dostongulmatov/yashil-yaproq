import './App.css';
import UploadIcon from './assets/icons/Upload';
import { useState , useEffect} from 'react';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import About from './components/About';
import axios from 'axios';

//
//  /images returns id | image | prediction as null 
// /images send image id
// /predict image id // predicted class

function App() {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()


const uploadImg = img => {
  const formData = new FormData();
  formData.append(
    "file",
    
    this.state.selectedFile,
    this.state.selectedFile.name
);
  axios.post("http://127.0.0.1:8000/images", {
      image: formData
  }).then((data) => console.log(data)).catch((e) => console.log(e));
};


const onSelectFile = e => {
  if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
  }

  setSelectedFile(e.target.files[0])
}
useEffect(() => {
  if (!selectedFile) {
      setPreview(undefined)
      return
  }

  const objectUrl = URL.createObjectURL(selectedFile)
  setPreview(objectUrl)

  return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

  return (
    <div>
        <Hero />
        <Carousel />
        <About />
        <Footer />
        {/* <h1 className='page-title'>Drag and drop your file here</h1>
        <label htmlFor="img-input" className='upload-input'>
          <UploadIcon className="upload-icon"/>
          <input type="file" id="img-input"  onChange={onSelectFile} />
        </label>
        {selectedFile &&  <img src={preview} className="preview-image" alt="preview-img"/> }
        {selectedFile &&  <div className='btn-cont'>
          <button className='btn delete-btn' onClick={() => setSelectedFile(null)}>Delete</button> 
          <button className='btn predict-btn'>Predict</button>
        </div> } */}
    </div>
  );
}

export default App;
