/** @jsxImportSource react */
import * as motion from "motion/react-client";
import { qwikify$ } from '@builder.io/qwik-react';


const Test1 = () => {
    return(
        <motion.div
            style={box}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
                scale: [null, 1.1, 1.6],
                transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        />
    );
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0000",
    borderRadius: 5,
}

export const FramerTest = qwikify$(Test1)