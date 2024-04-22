import Logo from "../assets/icons/logo-white"
import UploadIcon from "../assets/icons/Upload"
import MainImg from "../assets/images/hero-img.png"
import { useState , useEffect} from 'react';
import axios from 'axios';


const Hero = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [imgId, setImgId] = useState();
    const [uploading, setUploading] = useState(false);
    const [predicting, setPredicting] = useState(false)
    const [prediction, setPrediction] = useState("")
    const onSelectFile = e => {
    const file = e.target.files[0]
    const formData = new FormData();
    setUploading(true)
    formData?.append(
      "image",
      file,
      file?.name || "example"
  );
    axios.post("http://37.220.81.59:2000/images/",
        formData
    ).then((data) => {
        setImgId(data.data.id); 
        setUploading(false)
    });
      setSelectedFile(e.target.files[0])
    }

    const onDelete = () => {
        axios.delete(`http://37.220.81.59:2000/images/${imgId}/`)
        setSelectedFile(undefined);
        setPreview(undefined)
        setPrediction(undefined)
    }
  
    const onPredict = () => {
        setPredicting(true)
        axios.post(`http://37.220.81.59:2000/predict/${imgId}`).then((data) =>  {
            let res = data.data["predicted class"]
            setPrediction(res.replaceAll("_", " "))
            setPredicting(false)
        })
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
        <div className={"relative"}>
            <div className="w-full h-screen bg-black z-10 absolute opacity-30 text-white"/>
            <img src={MainImg} className="w-full h-screen absolute top-0 left-0 right-0 -z-1" alt="Leaves Images" />
            <div className="z-20 flex flex-col justify-center items-center pt-10 h-screen">
                <Logo className="z-[20] mb-8"/>
                <h3 className="text-white z-20 text-[36px] mb-4">O'simlik kasalliklarini aniqlash</h3>
                <div className="z-20 flex flex-col items-center gap-[64px] mb-[90px]">
                    <div className="z-20 flex gap-10 items-center ">
                        <label htmlFor="img-input" className="w-[400px] cursor-pointer h-[277px] flex-col flex justify-center items-center z-20 bg-white rounded-[25px]">
                            <UploadIcon className="mb-5 block"/>
                            <div className=" flex justify-center items-center max-w-[260px] w-full h-[66px] rounded-[25px] bg-primary text-white text-2xl mt-5">{uploading ? "Rasm yuklanmoqda" : "Rasm yuklash"}</div>
                            <input type="file" id="img-input"  onChange={onSelectFile} />
                        </label>
                        {selectedFile && !uploading && <div className="bg-white p-1 rounded-[25px]"> <img src={preview} className="rounded-[25px] w-[400px] h-[300px] z-20" alt="preview-img"/></div> }
                    </div>
                    {selectedFile && !uploading &&  
                        <div className='flex gap-10 max-w-[500px] w-full'>
                            <button className='rounded-full text-primary  text-2xl bg-white  h-16 w-full hover:bg-primary hover:text-white' onClick={onDelete}>Delete</button> 
                            <button className='rounded-full text-white hover:bg-primary   text-2xl bg-primary  h-16 w-full hover:bg-white hover:text-primary' onClick={onPredict}>{predicting ? "Predicting..." : "Predict"}</button>
                        </div> 
                    }
                   {prediction ? (<p className="text-[32px] text-white">{prediction}</p>) : ""} 
                </div>


            </div>
        </div>
    )
}

export default Hero