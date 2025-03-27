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

                        <div className="flex items-center justify-end gap-3">
                            <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                href="/login">Call Us</a>
                            <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                href="/login">Whatsapp  </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile navigation goes here  */}


            <div className="fixed bottom-0 z-30 button-container visible md:invisible lg:invisible">
                <button className="button block">
                    <svg
                        className="icon"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                    </svg>
                    <div className="">Home</div>
                </button>
                <button className="button">
                    <svg
                        className="icon"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                <button className="button">
                    <svg
                        className="icon"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
                    </svg>
                </button>
                <button className="button">
                    <svg
                        className="icon"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                </button>
            </div>
        </>

    );
};

export default NavBar;