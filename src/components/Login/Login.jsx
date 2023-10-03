import logo from "../../assets/subot.png"
import luces from "../../assets/beams.jpg"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div class="relative flex min-h-screen flex-col justify-center bg-gray-50">
                <img src={luces} alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-screen h-screen" />
                <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div class="mx-auto max-w-md">
                        <img src={logo} class="h-10 m-auto" alt="Subot" />
                        <div class="divide-y divide-gray-300/50">
                            <div class="flex flex-col space-y-6 py-8 text-base leading-7 text-gray-600">
                                <input class="mt-4 text-center p-1 outline-none border-b-2 focus:border-sky-500 transition" placeholder="Usuario" />
                                <input class="text-center p-1 outline-none border-b-2 focus:border-sky-500 transition" placeholder="Contraseña" />
                                <button className="bg-blue-400 text-white rounded-full p-1 hover:bg-purple-500 transition" onClick={() => navigate("/panel")}>Ingresar</button>
                            </div>
                            <div class="pt-8 text-base font-semibold leading-7">
                                <p class="text-gray-500">¿Aun no tienes cuenta?</p>
                                <p>
                                    <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Registrate ahora &rarr;</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login