import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      // Set fill as per your theme
      fill: "#1f8d93",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
      >
        <motion.path
          d="M180 80H80C50 80 30 100 30 130V150C30 180 50 200 80 200H130C160 200 180 220 180 250V270C180 300 160 320 130 320H30V370H130C190 370 230 330 230 270V250C230 190 190 150 130 150H80C50 150 30 130 30 100V80C30 50 50 30 80 30H180V80Z M280 50H350C390 50 420 80 420 120V330C420 370 390 400 350 400H280V350H350C360 350 370 340 370 330V120C370 110 360 100 350 100H280V50Z"
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
