
import './Hero.css'
import photo from '../../Assets/photo.jpeg'
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import js from '../../Assets/js.png'
import react from '../../Assets/react.png'
import git from '../../Assets/git.png'
import redux from '../../Assets/redux.webp'
import tailwind from '../../Assets/tailwind.png'
import sql from '../../Assets/sql.png'
import { TypeAnimation } from 'react-type-animation'
import { Element } from 'react-scroll'
const Hero = () => {
  return(
    <Element name='/' className='hero_container h-full'>
        <div className='hero_content'>            
        <TypeAnimation
                sequence={[
                    "I'm Jegadheeswaran",2000,
                    "FrontEnd Developer",2000
                ]}  
                wrapper='h2'              
                speed={10}
                repeat={Infinity}
            />
        <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solution </p>
        </div>
        <div className='hero_img'>
            <div>                
                <img className='photo' src={photo} alt='dp'/>                
            </div>
            <div className='flex flex-wrap md:flex-nowrap p-5 '>
                <div className='tech_icon'>
                    <img src={html} alt=''/>
                </div>
                <div className='tech_icon'>
                    <img src={css} alt=''/>
                </div>
                <div className='tech_icon'>
                    <img src={js} alt=''/>
                </div>
                <div className='tech_icon'>
                    <img src={react} alt=''/>
                </div>                
                <div className='tech_icon'>
                    <img src={redux} alt=''/>
                </div>                
                <div className='tech_icon'>
                    <img src={tailwind} alt=''/>
                </div>                
                <div className='tech_icon bg-white'>
                    <img src={sql} alt=''/>
                </div>                
                <div className='tech_icon bg-white'>
                    <img src={git} alt=''/>
                </div>                
            </div>            
        </div>

    </Element>
  )
}

export default Hero