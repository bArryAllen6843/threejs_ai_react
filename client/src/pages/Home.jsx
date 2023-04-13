import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  // use current snapshot
  const snap = useSnapshot(state);


  return (
    // enables the animation of components that have been removed from the tree
    <AnimatePresence>
      {/* if we are currently in the home page */}
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src= './threejs.png'
              alt='logo'
              className='w-8 h-8 object-conatin'
            />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden'/> DO IT.
              </h1>
            </motion.div>

            <motion.div {...headContentAnimation} 
            className="flex flex-col gap-5">
              <p className='max-w-md font-normal text-grey-600 text-base'>
                Create your unique and exclusive shirts with our
                brand-new 3D customization tool. <strong>Unleash your
                imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home