import { useEffect, useState } from "react";
import { quotes } from "../data/data"



const Quote = () =>{
    const[count,setcount]=useState(0);


    useEffect(()=>{
        const intervalId= setInterval(()=>{
                setcount(prev=>(prev+1)%quotes.length);
        },7000);

        return ()=>clearInterval(intervalId);
    },[]);

    return(
        <>
            <section className="info">
                <div className="fronimg"><img /></div>
                <div className="fronbox">
                    <div className="frontext">
                        <div>
                        {
                        <>
                            <p>{quotes[count].quot}</p>
                            <p>-{quotes[count].auth}</p>
                        </>
                        }   
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quote