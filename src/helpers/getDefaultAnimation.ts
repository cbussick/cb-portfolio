import { MotionProps, Transition, Variants } from "framer-motion";

const hiddenAnimationVariant = "hidden";
const shownAnimationVariant = "shown";

const transition: Transition = {
  duration: 0.5,
};

const animationVariants: Variants = {
  [hiddenAnimationVariant]: { opacity: 0, scale: 0.8 },
  [shownAnimationVariant]: {
    opacity: 1,
    scale: 1,
    transition,
  },
};

const viewport: MotionProps["viewport"] = {
  once: true,
  margin: "-100px 0px -200px 0px",
};
const layout: MotionProps["layout"] = true;

export const getDefaultAnimation = (
  delay?: number
): Pick<
  MotionProps,
  "variants" | "layout" | "initial" | "whileInView" | "viewport"
> => ({
  variants: animationVariants,
  layout,
  initial: hiddenAnimationVariant,
  whileInView: delay
    ? {
        ...animationVariants[shownAnimationVariant],
        transition: {
          ...transition,
          delay,
        },
      }
    : shownAnimationVariant,
  viewport,
});
