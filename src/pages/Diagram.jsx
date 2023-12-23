import {Chart as ChartJS} from 'chart.js/auto';
import {Bar, Doughnut, Line} from 'react-chartjs-2';
import './home.scss';
import { useRef } from 'react';
function Diagram({data}) {
    const backgroundColor = [];
    const  AES= data.aes.split('');
    for (var i = 0; i< AES.length;i++){
        if(AES[i] == 'A'){
            backgroundColor.push("rgba(43, 63, 229, 0.8)");
        }else if(AES[i] =='B'){
            backgroundColor.push("rgba(250, 192, 19, 0.8)");
        }else{
            backgroundColor.push("rgba(253, 135, 135 , 0.8)");
        }
    }
    return ( <div className="diagram_container">
        <Bar 
            data = {{
                labels: AES,
                datasets: [
                    {
                        label:"AES",
                        data: data.conf.map(element => element * 100),
                        backgroundColor: backgroundColor,
                    },
                ]
            }}
        />
        <div>
            <h4>Chú thích</h4>
            <span style={{backgroundColor:'rgba(43, 63, 229, 0.8)',padding:'5px 20px'}}>A</span>
            <span style={{backgroundColor:'rgba(250, 192, 19, 0.8)',padding:'5px 20px'}}>B</span>
            <span style={{backgroundColor:'rgba(253, 135, 135 , 0.8)',padding:'5px 20px'}}>C</span>
        </div>
    </div> );
}

export default Diagram;