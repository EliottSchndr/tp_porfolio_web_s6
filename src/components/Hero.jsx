import {Component} from "react";
import { Button } from "./Button.jsx"

export const Hero = ({name}) => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white">
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-brand-yellow font-nunito font-bold uppercase tracking-widest">
                    UI/UX Designer
                </h2>
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-font-high-emphasis">
                    Hello, my name is {name}
                </h1>
                <p className="text-font-medium-emphasis font-nunito text-lg max-w-md">
                    Short text with details about you, what you do or your professional career. You can add more
                    information on the about page. </p>
                <div className="flex gap-4">
                    <Button title="Projects" style="bg-brand-yellow text-font-high-emphasis px-6 py-2 rounded-[8px] font-roboto font-medium"/>
                    <Button title="LinkedIn" style="border-2 border-font-high-emphasis text-font-high-emphasis px-6 py-2 rounded-[8px] font-roboto font-medium"/>
                </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
                <div
                    className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow rounded-full filter blur-3xl opacity-20 -z-10"></div>
                <img
                    src="/path-to-madelyn.png"
                    alt="Madelyn Torff"
                    className="rounded-tl-[100px] rounded-br-[100px] w-80 object-cover border-b-8 border-r-8 border-brand-yellow"
                />
            </div>
        </section>
    );
};