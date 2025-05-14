import { useState } from "react";
import Modal from "./modal";
import Link from "next/link";

export default function IntroModal() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    
    const timeButton = (color: string, text: string) => {
        const colorClasses = {
            green: "bg-green-600 hover:bg-green-700",
            purple: "bg-purple-600 hover:bg-purple-700",
            orange: "bg-orange-600 hover:bg-orange-700",
            yellow: "bg-yellow-600 hover:bg-yellow-700", 
            blue: "bg-blue-600 hover:bg-blue-700",
        };

        return (
            <Link href={`/${text.replace(" ", "-")}`} key={text}>
                <button
                    className={`${colorClasses[color as keyof typeof colorClasses]} text-white rounded-lg px-4 py-2 transition duration-300`}
                >
                    {text}
                </button>
            </Link>
        );
    }

    return (
        <Modal autoOpen={true} id="intro">
            <div className="flex flex-col gap-4 items-center text-wrap">
                <h1 className="text-2xl text-gray-400">note</h1>
                <p>this website has been tested to work on firefox.</p>
                <p>it will most likely work on chrome, and on safari with some styles broken.</p>
                <p>it will not work on mobile.</p>
                <br />
                <p>to join us on this journey of tagalog, scroll down as you&apos;ll be taken through time</p>
                <p>click on any buttons that pop up to learn more about the language at the time</p>
                <p>and watch on the bottom of your screen as the language evolves with you</p>
                <br />
                <p>when you&apos;re ready, hit the X in the top right, or press escape</p>
                <br />
                {!menuOpen && (
                    <button
                    className="bg-gray-600 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition duration-300"
                    onClick={(e) => {
                        e.preventDefault();
                        handleMenuToggle();
                    }}
                    >
                        been here before?
                    </button>  
                )}
                {menuOpen && (
                    <div className="flex flex-row gap-2">
                        {
                            [
                                ["green", "austronesian"],
                                ["purple", "proto-philippine"],
                                ["orange", "old tagalog"],
                                ["yellow", "tagalog"],
                                ["blue", "filipino"],
                            ].map(([color, text]) => (
                                timeButton(color, text)
                            ))
                        }
                    </div>
                )}
            </div>
        </Modal>
    );
}