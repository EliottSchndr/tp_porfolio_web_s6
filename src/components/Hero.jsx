// javascript
// src/components/Hero.jsx
import { Button } from "./Button.jsx";
import { HeroImage } from "./HeroImage.jsx";

export const Hero = ({ name }) => {
  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-8">
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-brand-yellow font-nunito font-bold uppercase tracking-[0.2em] text-sm">
            UI/UX Designer
          </h2>

          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-font-high-emphasis leading-tight">
            Hello, my name <br /> is {name}
          </h1>

          <p className="text-font-medium-emphasis font-nunito text-xl max-w-lg leading-relaxed">
            Short text with details about you, what you do or your professional career.
            You can add more information on the about page.
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              title="Projects"
              style="bg-brand-yellow text-font-high-emphasis px-8 py-3 rounded-[8px] font-roboto font-bold hover:opacity-90 transition-opacity cursor-pointer"
            />

            <Button
              title="LinkedIn"
              style="border-2 border-font-high-emphasis text-font-high-emphasis px-8 py-3 rounded-[8px] font-roboto font-bold hover:bg-font-high-emphasis hover:text-white transition-all cursor-pointer"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <HeroImage
            image="/assets/image.png"
            alt={name}
            className="pointer-events-none absolute right-0 top-0 w-auto max-w-none object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};