import { useState } from 'react';
import { TitleLine } from "./TitleLine.jsx";
import { Button } from "./Button.jsx";
import { useContacts } from '../context/ContactsContext.jsx';

export const Form = () => {
    const { addMessage } = useContacts();
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        addMessage({
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message'),
        });
        e.target.reset();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <div id={"Contact"} className="flex flex-col justify-center items-center w-full my-8">
            <TitleLine name="Contact" />
            <form className="flex flex-col w-full max-w-lg gap-4 mt-8 p-6 font-nunito text-font-high-emphasis" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <input id="name" name="name" type="text" required className="p-3 bg-white border border-bg-line/30 rounded-lg shadow-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input id="email" name="email" type="email" required className="p-3 bg-white border border-bg-line/30 rounded-lg shadow-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea id="message" name="message" required rows="5" className="p-3 bg-white border border-bg-line/30 rounded-lg shadow-sm resize-none"></textarea>
                </div>
                <div className="flex justify-end items-center gap-4 mt-2">
                    {sent && (
                        <span className="font-nunito text-sm text-green-600">Message envoyé !</span>
                    )}
                    <Button
                        title="Send"
                        style="bg-brand-yellow text-font-high-emphasis px-8 py-3 rounded-[8px] font-roboto font-bold hover:opacity-90 transition-opacity cursor-pointer"
                    />
                </div>
            </form>
        </div>
    );
};
