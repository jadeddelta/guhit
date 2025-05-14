"use client";

import { motion, useScroll, useTransform, cubicBezier } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";
import Modal from "./_components/modal";
import IntroModal from "./_components/introModal";
import TopicRegion from "./_components/topicRegion";
import { posts } from "./_data/posts.json"

export default function Playground() {
    const { scrollY, scrollYProgress } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            console.log("Scroll progress:", latest);
        });

        const unsubscribeY = scrollY.on("change", (latest) => {
            console.log("Scroll Y:", latest);
        });
        
        return () => {
            unsubscribe()
            unsubscribeY()
        };
    }, [scrollYProgress, scrollY]);

    const x = (progress: number) => {
        return progress * 2;
    }

    const y = (progress: number) => {
        return progress * 3;
    }


    return (
        <div className="flex flex-col mt-[10vh]">
            <IntroModal />

            {
                posts.map((post, index) => (
                    <TopicRegion key={index} topic={post.text} id={post.id} title={post.title} left={index % 2 == 0}/>
                ))
            }

            <motion.div
                style={{ 
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            >
            
            </motion.div>
            <motion.p
                style={{ 
                    position: "fixed",
                    left: useTransform(scrollYProgress, 
                        [0, 0.125, 0.25, 0.375, 0.5, 0.675, 0.75, 0.875, 1], 
                        ["10vw", "88vw", "10vw", "88vw", "10vw", "88vw", "10vw", "88vw", "10vw"]
                    ),
                    top: useTransform(scrollYProgress, [0, 1], ["17.5vw", "95%"]),
                }}
                className="text-3xl text-cyan-400 transition duration-300 select-none"
            >
                {/* <Image
                src={'/Capture.PNG'}
                alt="Capture"
                width={100}
                height={100}
                /> */} 
                    ✦
            </motion.p>
            <motion.div className="fixed nts bottom-0 left-0 right-0 h-10 bg-gray-200 text-amber-950 text-center flex items-center justify-center"
                style={{ display: useTransform(scrollYProgress, [0.4, 0.41], ["block", "none"]) }}
            >
                <p className="text-2xl text-gray-500">ᜈᜄ᜔ᜐᜓᜐᜓᜎᜆ᜔ ᜀᜅ᜔ ᜉᜑᜋ᜔ ᜃᜓ ᜐ ᜃᜎᜆᜐ᜔</p>
            </motion.div>
            <motion.div className="fixed bottom-0 left-0 right-0 h-10 bg-gray-200 text-amber-950 text-center flex items-center justify-center"
                style={{ display: useTransform(scrollYProgress, [0.41, 0.5, 0.58], ["none", "block", "none"]) }}
            >
                <p className="text-2xl text-gray-500">Nagsusulat ang paham ko sa kalatas</p>
            </motion.div>
            <motion.div className="fixed bottom-0 left-0 right-0 h-10 bg-gray-200 text-amber-950 text-center flex items-center justify-center"
                style={{ display: useTransform(scrollYProgress, [0.58, 0.67], ["none", "block"]) }}
            >
                <p className="text-2xl text-gray-500">Nagsusulat ang iskolar ko sa papel</p>
            </motion.div>

        </div>
    );
}