import video from "../../assets/subotvideo.mp4"
import logo from "../../assets/subot.png"
import { useNavigate } from "react-router-dom"
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie.json';
import bot from '../../assets/bot.json';
import { Fade } from "react-awesome-reveal"

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <nav className="bg-white z-40 py-8 px-6 sm:px-16 flex justify-between w-screen fixed border-b-2 border-gray-50">
                <img className="w-28 sm:w-40" src={logo} />
                <button className="bg-blue-400 text-white rounded-md px-6 text-xl hover:bg-purple-500 transition" onClick={() => navigate("/login")}>Ingresar</button>
            </nav>
            <div className="w-full h-2/3 py-20 sm:pt-40 pt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-20">
                {/* <div className="w-full h-screen flex items-center justify-center gap-20"> */}
                <div className="w-full text-center p-10 sm:text-left sm:w-1/3">
                    <Fade triggerOnce direction='left' fraction={0.25}>
                        <h1 className="text-5xl font-extrabold text-gray-800">Misma inversión<br></br>mejores resultados</h1>
                        <br></br>
                        <p className="text-xl text-gray-700">Ahorra tiempo y genera <b>más ventas automatizando conversaciones con IA</b> en <b>WhatsApp y Redes Sociales</b> con <b>Subot</b>.
                            <br></br><br></br>
                            <b>Entiende, perfila, califica y gestiona cada contacto</b> para bajar tu <b>costo por ventas</b> y <b>atención</b>, mejorando el <b>retorno de tu inversión publicitaria</b> (ROAS).</p>
                    </Fade>
                </div>
                <Fade className="w-full sm:p-10 sm:w-1/2" triggerOnce direction='right' fraction={0.25}>
                    <video src={video} loop autoPlay muted onContextMenu={(e) => e.preventDefault()} playsInline></video>
                </Fade>
            </div>
            <div className="w-full h-fit">
                <div className="bg-custom-color w-full h-fit pb-10">
                    <Fade triggerOnce direction='up' fraction={0.25}>
                        <h1 className="font-bold text-5xl px-8 sm:px-20 text-center py-10 text-white">Inteligencia artificial</h1>
                    </Fade>
                    <Fade triggerOnce direction='up' fraction={0.25}>
                        <p className="font-medium text-2xl m-auto text-center p-4 sm:w-1/2 text-white">Nuestro chatbot está potenciado con IA para que puedas lograr mejores conversaciones en la precompra y en la poscompra.</p>
                        <button className="flex m-auto bg-sky-300 rounded-md mt-10 px-4 py-2">Conoce más</button>
                    </Fade>
                </div>
                <div className="w-full h-2/3 py-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-20">
                    {/* <div className="w-full h-screen flex items-center justify-center gap-20"> */}
                    <div className="w-full text-center p-10 sm:text-left sm:w-1/3">
                        <Fade triggerOnce direction='left' fraction={0.25}>
                            <h1 className="text-5xl font-extrabold text-gray-800">Tu relajate, nosotros nos encargamos</h1>
                            <br></br>
                            <p className="text-xl text-gray-700">Con nuestro chatbot puedes <b>atender a tus clientes de forma personalizada</b> las <b>24 horas del día</b>, incluso mientras <b>duermes</b>.</p>
                            <button className="my-10 rounded-md px-4 py-2 bg-purple-500 text-white font-semibold text-lg">Quiero mi bot</button>
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='right' fraction={0.25}>
                        <Lottie className="sm:h-96 h-60" animationData={animationData} />
                    </Fade>
                </div>
                <div className="w-full h-2/3 py-16 flex flex-col sm:flex-row-reverse items-center justify-center gap-4 sm:gap-20">
                    {/* <div className="w-full h-screen flex items-center justify-center gap-20"> */}
                    <div className="w-full text-center p-10 sm:text-left sm:w-1/3">
                        <Fade triggerOnce direction='right' fraction={0.25}>
                            <h1 className="text-5xl font-extrabold text-gray-800">No te quedes atras<br></br>automatiza tu negocio</h1>
                            <br></br>
                            <p className="text-xl text-gray-700"><b>Todo el mundo está integrando la inteligencia artificial</b> en sus negocios, no te quedes por fuera y <b>automatiza tu negocio ahora</b></p>
                            <button className="my-10 rounded-md px-4 py-2 bg-purple-500 text-white font-semibold text-lg">¡Quiero mi bot AHORA!</button>
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='left' fraction={0.25}>
                        <Lottie className="sm:h-96 h-60" animationData={bot} />
                    </Fade>
                </div>
            </div>
            <footer className="bg-custom-color w-full h-40">

            </footer>
        </>
    )
}

export default Home