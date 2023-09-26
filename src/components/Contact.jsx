import React from "react";

const Contact = () => {


    

    return (
        <div name="contact" id="Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <form  method="POST" action="https://getform.io/f/1a0cfc27-32bb-4fb8-a005-32b08d23074f" className="flex flex-col w-full md:w-1/2 " >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
                            required
                        />

                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
                            required
                        />

                        <textarea name="message" id="" cols="30" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder="Enter your message :)"></textarea>
                        
                        
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:bg-gradient-to-tr to-purple-700  duration-300">Let's Talk</button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;