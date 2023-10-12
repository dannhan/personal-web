'use client';

import { motion } from 'framer-motion';

export default function Animation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=' h-24 w-24 rounded-full bg-yellow-500'
    >
      Hello World
    </motion.div>
  );
}
