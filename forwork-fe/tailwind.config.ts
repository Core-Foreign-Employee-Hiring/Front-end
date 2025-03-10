import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['"Pretendard Variable"', 'sans-serif'],
      },
    },
    colors: {
      // Brand colors
      "main-dark": '#3617B3',
      main: '#5551F5',
      "main-light": '#DDE0FF',

      sub1: "#00B0A9",
      sub2: "#C151F5",
      sub3: "#FFB038",
      sub5: "#018DFF",

      // Particular colors
      error: '#FF5F4A',
      "error-light": '#FFDFDB',

      // Achromatic colors
      black: '#1E1E1E',
      gray5: '#6F717C',
      gray4: '#999BA5',
      gray3: '#C5C6CD',
      gray2: '#E9EBEF',
      gray1: '#F7F8F9',
      white: '#FFFFFF',

      // 그 외 추가 컬러
      // ...
    },
    fontSize: {
      //폰트 사이즈
      h1: '24px', // Head 1
      h2: '20px', // Title 1
      h3: '18px', // Title 2, 3
      h4: '16px', // Title 4, 5, SubTitle 1, Body1
      h5: '14px', // SubTitle 2, Body2, Button
      h6: '12px',
    },
  },
  plugins: [],
} satisfies Config;
