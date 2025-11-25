export const PurposeSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Our <span className="italic text-accent drop-shadow-[0_0_15px_rgba(142,215,218,0.25)]">Purpose</span>
        </h2>

        <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
          At NovaLabs, peptides are the foundation of every formula. Designed with precision, they deliver results you can see and confidence you can feel.
        </p>
      </div>
    </section>
  );
};
