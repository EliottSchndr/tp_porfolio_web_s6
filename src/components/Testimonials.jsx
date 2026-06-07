import { TitleLine } from './TitleLine.jsx';
import { TestimonialItem } from './TestimonialItem.jsx';
import { useTestimonials } from '../context/TestimonialsContext.jsx';

export const Testimonials = () => {
    const { testimonials } = useTestimonials();
    const visible = testimonials.filter((t) => t.visible);

    if (visible.length === 0) return null;

    return (
        <section className="flex flex-col items-center gap-10 px-6 sm:px-10 md:px-16 py-10">
            <TitleLine name="Testimonials" />
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
                {visible.map((t) => (
                    <TestimonialItem
                        key={t.id}
                        name={t.name}
                        role={t.role}
                        message={t.message}
                    />
                ))}
            </div>
        </section>
    );
};
