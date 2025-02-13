import { Lato, Playfair } from 'next/font/google'

export const lato = Lato({
  subsets: ['latin'],  // Use 'latin' or 'latin-ext' instead of 'sans-serif'
  weight: ['300', '400', '700'],
  preload: true
});

export const playFair = Playfair({
  subsets: ['latin'],  // Use 'latin' or 'latin-ext' instead of 'sans-serif'
  weight: ['300', '400', '700'],
  preload: true
});

export const timesNewRoman = (weight = '400') => ({
  fontFamily: "'Times New Roman', Times, serif",
  fontWeight: weight,
});

