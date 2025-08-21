import { useState } from 'react';
import './upload-media.css'

const UploadMedia = ({setImageFile}) => {
    const [file, setFile] = useState();
    const [url, setUrl] = useState();
    
    const handleSetFile = (e) => {
        setFile(e.target.files[0])
        setImageFile(e.target.value);

    }
    //https://avdvca.gov.ua/files/2023/September/30.09.2023.1.2.jpg
    //${file ? URL.createObjectURL(file): null})`
    return(
        <div>
        <label htmlFor='file-upload' className='upload-media-wrapper' style={{backgroundImage: `url(${url})`}}>
            <div>
                <input id="file-upload" onChange={(e) => {handleSetFile(e)}}  type='file'/>
                <span>МЕДІА</span>
            </div>
        </label>
        <input value={url} onChange={(e) => setImageFile(e.target.value)}/> 
        </div>
    );
}

export default UploadMedia;