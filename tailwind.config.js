module.exports = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          colors: {
            'black' : '#2B2E2E',
            'coalblack' : '#303030',
            'blue' : '#2F91C9',
            'skyblue' : '#4BB7E1',
            'lightblue' : '#A2D8F3',
            'extralightblue' : '#D6EEF8',
            'gray' : '#E5EAED',
            'lightgray' : '#F1F9FC',
            'fleshpink' : '#F67378',
            'pink' : '#FFC7C8',
            'lightpink' : '#FFD2D5',
            'extralightpink' : '#FFE9EB',
          },
        },
      },
      plugins: [],
}