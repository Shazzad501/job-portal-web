import { motion } from "motion/react"
import hero1 from '../../assets/hero-1.jpg'
import hero2 from '../../assets/hero-2.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-[450px] overflow-hidden">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className='w-full lg:w-1/2'>

        <motion.img
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 4,  ease: "linear", repeat: Infinity}}
        src={hero1}
        className="max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] border-l-4 border-black border-b-4" />

        <motion.img 
         animate={{ x: [0, 25, 0] }}
         transition={{ duration: 4, delay: 0.5, ease: "linear", repeat: Infinity}}
        className="max-w-sm w-72 ml-[150px]  rounded-t-[40px] rounded-br-[40px] border-l-4 border-black border-b-4"
        src={hero2} 
        alt="" />
      </div>
      <div className='w-full lg:w-1/2'>
        <motion.h1 
         animate={{ y: -15 }}
         transition={{ duration: 0.5, delay:0.5, ease: "linear" }}
        className="text-5xl font-bold -mb-8">Latest Jobs for you!</motion.h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;