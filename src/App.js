import React,{useState,useEffect,useRef} from 'react'
import './App.scss'

function App() {
  const [income,setIncome]=useState([])
  const [totalincome,setTotalincome]=useState(0)
  const text=useRef(null)
  const numbe=useRef(null)
  const datee=useRef(null)
  
const add=(e)=>{
  e.preventDefault();
  const text1=text.current.value;
  const numbe1=numbe.current.value;
  const datee1=datee.current.value;
  if(text1==='') return alert('Enter description please!');
  if(numbe1==='') return alert('Enter price please!');
  if(datee1==='') return alert('Enter date please!');
setIncome([...income,{ "id":new Date().getTime(),
"des":text1,"price":numbe1,"date":datee1}])

text.current.value='';
numbe.current.value='';
datee.current.value='';

}

useEffect(() => {
  let him=0;
  for(let i=0;i<income.length;i++){
    him +=parseInt(income[i].price); 
  }
  setTotalincome(him)
}, [income]);
const del=(id)=>{
  setIncome([...income].filter((income)=>income.id!==id))
}
useEffect(() => {
  text.current.focus()
}, []);

  return (
    <div className="App">
      <div>
     <h1><u>INCOME TRACKER</u></h1>
     <caption>INCOME BALANCE</caption>
     <b className="s1">${totalincome}</b>
     </div>
    <form onSubmit={add}>
      <input type='text' placeholder='  Income description...' ref={text}   />
      <input type='number' placeholder='$Price...' ref={numbe}  />
      <input type='Date' ref={datee}  /><br/>
      <button type='submit' className='ad'>ADD INCOME</button>
    </form>

{income.map((income)=><div>
<div className="append">
  <p>{income.des}</p>
  <p>${income.price}</p>
  <p>{income.datex}</p>
  <button onClick={()=>del(income.id)}>+</button>
</div>

</div>)}

    </div>
  );
}

export default App;
