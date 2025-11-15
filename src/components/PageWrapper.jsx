import {motion} from "framer-motion";

export default function PageWrapper({ children }){
    return(
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // smooth ease-in-out
            }}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    )
}