import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation} from '../config/motion';
import state from '../store';
import { CustomButton } from '../components';

const Home = () => {

  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="./threejs.png" alt="logo" className='h-8 w-8 object-contain' />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
               <h1 className="head-text">
                LET'S <br className='xl:block hidden' /> DO IT
               </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5 xs:'>
              <p className='max-w-md text-gray-600 font-mormal text-base'>
                Create exclusive and unique shirts with our latest 3D customization tools.
                <strong> Unleash and explore your imagination</strong> {" "} and define your pattern
              </p>
              <CustomButton 
                type="filled"
                title="Customize Shirt"
                handleClick={() => state.intro = false}
                customStyles="px-4 py-2.5 font-bold text-sm w-fit"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home