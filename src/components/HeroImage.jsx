export const HeroImage = ({ image, alt, className }) => {
  return (
    <img src={image} alt={alt} className={className} />
  );
};