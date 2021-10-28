import React,{useEffect} from 'react'
import './lastpage.scss'
function Lastpage({sender,setsender}) {
    useEffect(() => {
        const temp=localStorage.getItem('dos')
        const load=JSON.parse(temp) 
        if(load){
            setsender(load)
        }  
       }, [])
 useEffect(() => {
     const temp=JSON.stringify(sender)
     localStorage.setItem('dos',temp)
 }, [sender])
    return (
        <div className='last'>
            <div>
                <p>
                Mr/Mrs {sender} WE ARE VERY GLAD YOU ARE EXPORTING YOUR GOODS THROUH OUR APP.
                WE PROMISED YOU 
                THAT YOUR GOODS WOULD REACH IT'S DESTINATION ON TIME.THANKS FOR WORKING WITH US. 
                <a href="/">OK</a>
                </p>
            </div>
      
        </div>
    )
}

export default Lastpage;
