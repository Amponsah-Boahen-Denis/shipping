import React,{useRef,useEffect } from 'react'
import {Route,Link} from 'react-router-dom'
import './datapage.scss'
function Datapage({agent,setagent,sender,setsender,reciever,
    setreciever,goods,setgoods,hide,setHide,slocation,setslocation,rlocation,setRlocation}) {
        const sen=useRef(null)
        const reciev=useRef(null)
        const agen=useRef(null)
        const text=useRef(null)
        const sl=useRef(null)
        const rl=useRef(null)
        useEffect(() => {
            sen.current.focus(); 
         const temp=localStorage.getItem('dos')
         const load=JSON.parse(temp) 
         if(load){
             setgoods(load);
            setreciever(load);
            setRlocation(load);
            setagent(load);
            setsender(load);
            setslocation(load);
            
       }  
     }, [])
  useEffect(() => {
      const temp=JSON.stringify(agent,goods,sender,rlocation,slocation,reciever)
      localStorage.setItem('dos',temp)
  }, [agent,goods,sender,rlocation,slocation,reciever])


    
const sub=(e)=>{
    e.preventDefault();
    if(sender==='') return sen.current.focus();
   else if(slocation==='') return sl.current.focus();
    else if(reciever==='') return reciev.current.focus();
   else if(rlocation==='') return rl.current.focus();
   else if(agent==='') return agen.current.focus();
  else if(goods==='') return text.current.focus();
    else{
        setHide(true)
    }
    agen.current.value=''
}
    return (
        <div className='data'>
            <fieldset>
            <legend><h1>what do you want to export <span>?</span></h1></legend>

        <div className='data1'>
            <form onSubmit={sub}>
                <div>
                <input type="text" value={sender}   onKeyDown ref={sen}
                 onChange={(e)=>setsender(e.target.value)} placeholder='  sender name' />
                  <input type="text" placeholder='sender location' ref={sl}   
                   onKeyDown
                 value={slocation} onChange={(e)=>setslocation(e.target.value)}/>
                </div>
          
           <div>
           <input type="text"  value={reciever} onChange={(e)=>setreciever(e.target.value)} 
            ref={reciev} onKeyDown  placeholder='  reciever name'/>
            <input type="text" value={rlocation} ref={rl} onKeyDown
            placeholder='reciever location' onChange={(e)=>setRlocation(e.target.value)}
            />

           </div>
                
                <input  type='text' id='agent' 
                value={agent}  onKeyDown ref={agen}
                onChange={(e)=>setagent(e.target.value)} 
                 placeholder='  shipping agent' />
               <textarea placeholder='     shiping materials' value={goods} 
               
            onKeyDown onChange={(e)=>setgoods(e.target.value)} ref={text}></textarea> 
            <button  className={'bu ' + (hide && 'active')}  type="submit">Done</button>
            <button  className={'butt ' + (hide && 'active')} ><Link  className='lik' to='/checkpage' >Export</Link></button>
            </form>
         
        </div>
        </fieldset>
        </div>
    )
}

export default Datapage;
