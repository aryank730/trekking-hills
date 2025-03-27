import React from 'react'
import Feedback from './galary/Feedback'

function Galary() {
    return (
        <>


            {/* Dynamic galary for show off */}


            <section className="bg-zinc-50 overflow-hidden">
                <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 mt-36 flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row mx-auto">
                        {/*- Starts component */}{" "}
                        <a href="#_">
                            {" "}
                            <img
                                src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                                alt="#_"
                            />{" "}
                        </a>
                        <a href="#_">
                            {" "}
                            <img
                                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                                alt="#_"
                            />{" "}
                        </a>
                        <a href="#_">
                            {" "}
                            <img
                                src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                                alt="#_"
                            />{" "}
                        </a>
                        <a href="#_">
                            {" "}
                            <img
                                src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                                alt="#_"
                            />{" "}
                        </a>
                        {/*- Ends component */}
                    </div>{" "}
                    
                </div>
            </section>





            <div className="bg-gray-100 ">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        Bento Grid Layout with Images
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Large item */}
                        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Nature"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
                                    <p className="text-white">
                                        Discover the beauty of the natural world
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Two small items */}
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Food"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-gray-500">Culinary Delights</h4>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Technology"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-gray-500">Tech Innovations</h4>
                                </div>
                            </div>
                        </div>
                        {/* Three medium items */}
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Travel"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-gray-500">Travel Adventures</h4>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Art"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-gray-500">
                                        Artistic Expressions
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* bottom cards */}
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Sport"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-white">Swimming</h4>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Sport"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-white">Chess</h4>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Sport"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-white">Football</h4>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Sport"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-white">Cricket</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* feedback form goes here  */}


            <Feedback />

        </>
    )
}

export default Galary