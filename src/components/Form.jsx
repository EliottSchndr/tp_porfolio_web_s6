import {TitleLine} from "./TitleLine.jsx";
import {Button} from "./Button.jsx";


export const Form = () => {
    return (
        <div id={"Contact"} className="flex flex-col justify-center items-center w-full my-8">
            <TitleLine name="Contact" />
            <form className="flex flex-col w-full max-w-lg gap-4 mt-8 p-6 font-nunito text-font-high-emphasis" onSubmit={(e) => {e.preventDefault();}}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <input id="name" name="name" type="text" required className="p-3 bg-white border border-bg-line/30 rounded-lg shadow-sm " />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input id="email" name="email" type="email" required className="p-3 bg-white border border-bg-line/30 rounded-lg shadow-sm " />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea id="message" name="message" required rows="5" className="p-3 bg-white border border-bg-line/30 rounded-lg shadow-sm resize-none "></textarea>
                </div>
                <div className="flex justify-end mt-2">
                    <Button title="Send" onClick="" style="bg-brand-yellow text-font-high-emphasis px-8 py-3 rounded-[8px] font-roboto font-bold hover:opacity-90 transition-opacity cursor-pointer" />
                </div>
            </form>
        </div>
    )
}