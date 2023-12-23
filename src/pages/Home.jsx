import './home.scss';
import { useState } from 'react';
import axios from 'axios';
import Diagram from './Diagram';
function HomePage() {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [isResult,setIsResult] = useState(false);
    const [data,setData] = useState([
        {nameFile:"Video1",aes:"ABCAABA",saScore:20,conf:[0.049, 0.158, 0.049, 0.012, 0.062,0.728, 1.0]},
        {nameFile:"Video2",aes:"CBCBABA",saScore:15,conf:[0.58, 0.158, 0.26, 0.12, 0.062, 0.728, 0.59]},
        {nameFile:"Video3",aes:"BBCBCBA",saScore:10,conf:[0.49, 0.158, 0.049, 0.012, 0.062, 0.23, 0.72]}
        
    ])
    const [index,setIndex] = useState();
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleUpload = () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('videos', selectedFiles[i]);
        }
        console.log('formdata: ',selectedFiles[0],'selectedFiles[1]',selectedFiles[1]);
        // try {
            // const response = await axios.post('http://your-server-url/upload', formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // });
            setIsResult(true);
        // } catch (error) {
        //     console.error('Error uploading files:', error);
        // }
    };
    return ( <div className='home_container'>
        <div className='home_predict'>
            <div className='home_uploads_box'>
                <label className='home_uploads' htmlFor="filevideos"> 
                    <span>Uploads</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                </label>
                <input type="file" hidden id="filevideos" name="videos" accept="video/*" multiple onChange={handleFileChange} />
                
            </div>
            <button onClick={handleUpload} className='btn btn-success'>Predict</button>
        </div>
        {isResult && <div className='table_data'>
            <h1>RESULT</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">File name</th>
                    <th scope="col">AES</th>
                    <th scope="col">SA Score</th>
                    <th scope="col">Confidence Score</th>
                    <th scope="col">Diagram</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item,index) =>{
                        return <tr key={index}>
                        <th scope="row">{item.nameFile}</th>
                        <td>{item.aes}</td>
                        <td>{item.saScore}</td>
                        <td>{JSON.stringify(item.conf)}</td>
                        <td><button onClick={e => setIndex(index)} className='btn btn-success'>Watch</button></td>
                    </tr>
                    })}
                    
                    
                </tbody>
            </table>
        </div>}
        {(index || index ==0) &&
            <Diagram data = {data[index]}/>}
     </div>);
}

export default HomePage;