import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState("lime");
  const [b, setB] = useState("fuchsia");
  const [t, setT] = useState("blue");

  return (
    <>
    <div  style={{display:"flex", gap:30, marginBottom:20}}>
      <button onClick={()=>{setA(b)}}>a=b</button>
      <button onClick={()=>{setB(a)}}>b=a</button>
      <button onClick={()=>{setT(a)}}>t=a</button>
    </div>
    <div style={{display:"flex", gap:30}}>
      <button onClick={()=>{setT(b)}}>t=b</button>
      <button onClick={()=>{setA(t)}}>a=t</button>
      <button onClick={()=>{setB(t)}}>b=t</button>
    </div>
     <svg style={{width: 300,height: 300}} viewBox="0 0 251 201">
      <circle cx={50} cy={50} r={50} fill={b}/>
      <circle cx={125} cy={170} r={50} fill={t}/>
      <circle cx={200} cy={50} r={50} fill={a}/>
      <text style={{fontSize:50,fill:"yellow"}} x={185} y={60}>a</text>
      <text style={{fontSize:50,fill:"yellow"}} x={35} y={65}>b</text>
      <text style={{fontSize:50,fill:"yellow"}} x={115} y={180}>t</text>
     </svg>
    </>
  )
}

export default App
