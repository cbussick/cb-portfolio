import { MotionProps } from "framer-motion";

const initial: MotionProps["initial"] = { opacity: 0, scale: 0.8 };
const transition: MotionProps["transition"] = {
  duration: 0.5,
};
const whileInView: MotionProps["whileInView"] = { opacity: 1, scale: 1 };
const viewport: MotionProps["viewport"] = { once: true };
const layout: MotionProps["layout"] = true;

export const getDefaultAnimationWithDelay = (
  delay: number
): Pick<
  MotionProps,
  "layout" | "initial" | "transition" | "whileInView" | "viewport"
> => ({
  layout,
  initial,
  whileInView,
  viewport,
  transition: { ...transition, delay },
});
