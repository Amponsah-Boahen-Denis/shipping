import React,{useEffect} from 'react'
import './checkpage.scss'
import {Link} from 'react-router-dom'
function Checkpage({agent,setagent,sender,setsender,reciever,
    setreciever,goods,setgoods,hide,setHide,slocation,setslocation,rlocation,setRlocation}) {
 /*useEffect(() => {
         const temp=localStorage.getItem('dos')
         const load=JSON.parse(temp) 
         if(load){
             setgoods(load)
             setreciever(load)
             setRlocation(load)
             setsender(load)
             setslocation(load)
             setagent(load)

         }  
        }, [])
  useEffect(() => {
      const temp=JSON.stringify(agent,goods,sender,rlocation,slocation,reciever)
      localStorage.setItem('dos',temp)
  }, [agent,goods,sender,rlocation,slocation,reciever])*/
    return (
        <div className='div'>
            <div>
                <p>Hello {sender} from {slocation}, you are exporting
                 {goods} to {reciever} in {rlocation} through {agent}
                    request is recieved sucessfully and please would like to  
                   <b> <Link to='/lastpage'>Accept</Link> </b> or <b><a href="/">Decline</a></b>
                    </p>
                  
                    
                
            </div>
        </div>
    )
}

export default Checkpage;
