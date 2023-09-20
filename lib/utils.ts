import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const variants = {
  hidden: { opacity: 0, translateY: -200 },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};
