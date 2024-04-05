
import { Element } from 'react-scroll'
import img from '../../Assets/photo2.jpeg'
import './About.css'



const About = () => {
  return (
    <Element name='about' className=''>  
    <div className='h-full flex flex-col md:flex-row bg-black p-10 about '>
        <div className='md:w-1/2 py-5'>
            <img className='hover:grayscale-0 duration-500 grayscale  rounded-full image' src={img} alt="img" />
        </div>
        <div className='md:w-1/2 flex justify-center'>    
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl p-2 border-b-4 mb-5 w-full border-teal-500 text-center uppercase shadow-2xl rounded-full shadow-violet-500'>About Me</h1>
            <p className='md:text-4xl p-7 pb-5 aboutFont'>Hi,I'm Jegadheeswaran. I am a front end web developer.I built beautiful websites with React Js</p>
            <p className='md:text-4xl p-7 pb-5 aboutFont'>I am proficient in frontend skills like React JS,Redux,Axios,Tailwind CSS and many more..</p>
          </div>        
        </div>
    </div>
    </Element>
  )
}

export default About