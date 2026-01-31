import { motion } from "framer-motion";
import heroImage from "@/assets/hero-couple.jpeg"; // adjust path if needed

const HeroSection = () => {
  const brideLetters = "Anil".split("");
  const groomLetters = "Arpitha".split("");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Priya & Arjun"
          className="
            h-full w-full object-cover
            object-[29%_center]
            md:object-center
          "
        />
      </motion.div>

      {/* Black Overlay for Text Highlight */}
      <div
        className="
          absolute inset-0
          bg-black/55
          md:bg-black/45
          z-[1]
        "
      />

      {/* Content */}
      {/* <div
        className="
          relative z-10 flex h-full flex-col
          items-center justify-center px-4
          md:translate-y-16
        "
      > */}
      <div
  className="
    relative z-10 flex h-full flex-col
    items-center justify-end
    px-4 pb-32 md:pb-40
    text-center
  "
>

        {/* Names */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          {/* Bride Name */}
          <div className="flex">
            {brideLetters.map((letter, index) => (
              <motion.span
                key={`bride-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.15,
                  ease: "easeOut",
                }}
                className="
                  text-5xl md:text-7xl lg:text-8xl
                  font-heading
                  text-[#d4af37]
                "
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Ampersand */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="
              text-3xl md:text-5xl
              font-heading
              text-[#d4af37]
            "
          >
            &
          </motion.span>

          {/* Groom Name */}
          <div className="flex">
            {groomLetters.map((letter, index) => (
              <motion.span
                key={`groom-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2.2 + index * 0.15,
                  ease: "easeOut",
                }}
                className="
                  text-5xl md:text-7xl lg:text-8xl
                  font-heading
                  text-[#d4af37]
                "
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
          className="my-8 h-px w-32 md:w-48 bg-[#d4af37]/70"
        />

        {/* Wedding Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4 }}
          className="
            text-sm md:text-base
            tracking-[0.3em]
            text-white/90
          "
        >
          February 8, 2026
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4.5 }}
          className="
            mt-4 text-lg md:text-xl
            italic font-heading
            text-white/70
          "
        >
          A celebration of love
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
