import React from 'react'

const About = () => {
    return (
        <div name="about" id='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '> 
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-10'>
                I'm a passionate frontend developer with a penchant for crafting visually appealing websites. With a creative mindset and expertise in HTML, CSS, JavaScript, React.js, Redux, Bootstrap, TypeScript, Tailwind CSS, Java, and Python, I thrive on turning ideas into seamless user experiences. Beyond coding, I actively contribute to open-source projects and enjoy building innovative web applications. 
                </p>
                <br />
                <p className='text-xl'>
                Let's collaborate and create something extraordinary!
                </p>
            </div>
        </div>
    )
}

export default About