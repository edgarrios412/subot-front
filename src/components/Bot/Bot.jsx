import { useState } from 'react'
import axios from 'axios'
import style from "./Bot.module.css"

function Bot() {

  const [role, setRole] = useState()
  const [id, setId] = useState(null)
  const [loading, setLoading] = useState(false)

  const crearBot = async () => {
    setId(null)
    setRole("")
    setLoading(true)
    const {data} = await axios.post("http://localhost:3001/bot", {role: role})
    // alert("Generando codigo qr...")
    setTimeout(() =>{
      // alert("QR generado")
      setLoading(false)
      setId(data.id)
    },5000)
  }

  return (
    <>
      <div className="text-center">
        <h1 className='text-4xl font-semibold mt-10'>BOT</h1>
        <div className='w-96 h-96 m-auto flex items-center justify-center'>
      {loading && <div className={style.ldsring}><div></div><div></div><div></div><div></div></div>}
      {id && <img className="m-auto mb-5" src={`http://localhost:3001/${id}/qr`}></img>}
        </div>
        <form onSubmit={(e) => {e.preventDefault(); crearBot()}}>
        <input required minLength={20} value={role} className='border-2 rounded-md p-2' onChange={(e) => setRole(e.target.value)} placeholder="Rol del bot"/>
        <br></br><br></br>
        <button className='rounded-md bg-blue-400 hover:bg-purple-500 transition text-white p-2 font-medium border-gray-200 border-2'>Crear bot</button>
        </form>
        </div>
    </>
  )
}

export default Bot