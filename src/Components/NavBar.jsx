import { NavLink } from "react-router-dom";
import '../index.css'
import snailogo from '../images/snailogo.png'

const NavBar = () => {
    return (
        <>


            <header
                class="glassefc fixed right-0 inset-x-0 z-30 mx-auto md:w-[70%] w-[92%] border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-6 lg:top-6 top-4 md:rounded-3xl lg:rounded-3xl rounded-3xl ">
                <div class="px-4">
                    <div class="flex items-center justify-between">
                        <div class="flex shrink-0">
                            <a aria-current="page" class="flex items-center" href="/">
                                <img class="h-8 w-auto" src={snailogo} alt="" />
                                <p class="sr-only">Website Title</p>
                            </a>
                        </div>
                        <div class="hidden text-center md:flex md:items-center md:justify-center lg:gap-12 md:gap-5">
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return isActive ? "text-orange-600" : "text-slate-900";
                                }} aria-current="page"
                                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">Home</NavLink>

                            <NavLink
                                to="/Galary"
                                className={({ isActive }) => {
                                    return isActive ? "text-orange-600" : "text-slate-900";
                                }} class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">Galary</NavLink>

                            <NavLink
                                to="/About"
                                className={({ isActive }) => {
                                    return isActive ? "text-orange-600" : "text-slate-900";
                                }} class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">About</NavLink>

                            <NavLink
                                to="/Contact"
                                className={({ isActive }) => {
                                    return isActive ? "text-orange-600 font-Medium" : "text-slate-900";
                                }} class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">Contact</NavLink>

                        </div>

                        <div className="flex  items-center justify-end gap-3">
                            <div className="flex justify-center items-center gap-8 h-full">
                                    <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[2px] rounded-[16px]" >
                                        <button className="group p-[2px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                                            <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-1.5" >
                                                <div className="flex gap-2 items-center">
                                                    <span className="  text-white">Call Us now</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>


                                <div className="flex justify-center items-center gap-8 h-full">
                                    <div className="flex bg-gradient-to-b from-gray-800/40 to-transparent p-[2px] rounded-[16px]" >
                                        <button className="group p-[2px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                                            <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-1.5" >
                                                <div className="flex gap-2 items-center">
                                                    <span className="  text-white">Whatsapp</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                            </div>

                            {/* mobile navigation  */}

                            <NavLink to="/Menu" className="block  md:hidden lg:hidden sm:block" >
                                <label class="flex flex-col gap-2 w-8">
                                    <input class="peer hidden" type="checkbox" />
                                    <div
                                        class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
                                    ></div>
                                    <div
                                        class="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"
                                    ></div>
                                    <div
                                        class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
                                    ></div>
                                </label>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </header>

        </>

    );
};

export default NavBar;