import { Poppins,  } from "next/font/google";
import localFont from 'next/font/local'


export const mainFont = Poppins({
    weight: ["200", '400'],
    subsets: ['latin']
})

export const myFont = localFont({
  src: "./Albertus Bold.ttf",
  display: "swap",
});