import { useState } from 'react';
import { TitleLine } from "./TitleLine.jsx";
import { Button } from "./Button.jsx";
import { useContacts } from '../context/ContactsContext.jsx';
import { contactSchema } from '../types/contactSchema.js';

const EMPTY_ERRORS = { name: '', email: '', message: '' };

export const Form = () => {
    const { addMessage } = useContacts();
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState(EMPTY_ERRORS);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const values = {
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message'),
        };

        const result = contactSchema.safeParse(values);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                name: fieldErrors.name?.[0] ?? '',
                email: fieldErrors.email?.[0] ?? '',
                message: fieldErrors.message?.[0] ?? '',
            });
            return;
        }

        setErrors(EMPTY_ERRORS);
        addMessage(values);
        e.target.reset();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <div id="contact" className="flex flex-col justify-center items-center w-full my-8">
            <TitleLine name="Contact" />
            <form className="flex flex-col w-full max-w-lg gap-4 mt-8 p-6 font-nunito text-font-high-emphasis" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`p-3 bg-white border rounded-lg shadow-sm outline-none transition-colors ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-bg-line/30 focus:border-brand-yellow'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className={`p-3 bg-white border rounded-lg shadow-sm outline-none transition-colors ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-bg-line/30 focus:border-brand-yellow'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className={`p-3 bg-white border rounded-lg shadow-sm resize-none outline-none transition-colors ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-bg-line/30 focus:border-brand-yellow'}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-0.5">{errors.message}</p>}
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
