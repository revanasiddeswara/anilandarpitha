import { motion } from "framer-motion";
import couple1 from "@/assets/DSC_6661.jpg.jpeg";
import couple2 from "@/assets/DSC_8369.jpg.jpeg";
import couple3 from "@/assets/DSC_6552.jpg.jpeg";

const moments = [
  {
    text: "Two souls, one beautiful journey",
    image: couple1,
  },
  {
    text: "In every smile, a promise",
    image: couple2,
  },
  {
    text: "Forever starts with us",
    image: couple3,
  },
];

const MomentsSection = () => {
  return (
    <section className="bg-muted/50 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-24"
        >
          <h2 className="section-title mb-4 text-sm text-accent md:text-base">
            Moments
          </h2>
          <p className="font-display text-3xl text-foreground md:text-4xl lg:text-5xl">
            A Glimpse of Us
          </p>
          <div className="divider-gold mx-auto mt-6 w-24" />
        </motion.div>

        {/* Image Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {moments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-sm shadow-card">
                <img
                  src={item.image}
                  alt="Couple moment"
                  className="aspect-[4/3] w-full object-cover romantic-image"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)]" />
              </div>

              <p className="mt-6 font-heading text-lg italic text-foreground/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
