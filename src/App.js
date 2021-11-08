
import Datapage from './shipping/Datapage.js'
import Checkpage from './shipping/checkpage.js'
import Lastpage from './shipping/lastpage.js'
import {Route} from 'react-router-dom'
import React, {useState} from 'react'
function App1() {
    const [hide,setHide]=useState(false);
    const [agent, setAgent] = useState('');
    const [slocation, setSlocation] = useState('');
    const [rlocation, setRlocation] = useState('');
    const [sender, setSender] = useState('');
    const [reciever, setReciever] = useState('');
    const [goods, setGoods] = useState('');
    return (
        <div>
          <Route exact  path='/'><Datapage
          hide={hide} setHide={setHide}
          agent={agent} setagent={setAgent}
          sender={sender} setsender={setSender}
          reciever={reciever} setreciever={setReciever}
          goods={goods} setgoods={setGoods}
          rlocation={rlocation} setRlocation={setRlocation}
          slocation={slocation} setslocation={setSlocation}
          /></Route>
          <Route exact path='/checkpage'><Checkpage
           agent={agent} setagent={setAgent}
           sender={sender} setsender={setSender}
           reciever={reciever} setreciever={setReciever}
           goods={goods} setgoods={setGoods}
           rlocation={rlocation} setRlocation={setRlocation}
           slocation={slocation} setslocation={setSlocation}
          /></Route>  
           <Route exact path='/lastpage'> <Lastpage  sender={sender} setsender={setSender}/></Route>
        </div>
    )
}

export default App1
