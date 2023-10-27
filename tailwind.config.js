/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      heading: ['Oswald', 'sans-serif'],
    },
    screens: {
      ssm: '375px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
      xxxl: '2560px',
    },
    container: {
      padding: {
        DEFAULT: '0',
        sm: '0',
        lg: '2rem',
        xl: '2rem',
        xxl: '2.75rem',
      },
    },
      extend: {
        colors: {
          blue: {
            DEFAULT: '#0F0550',
            light: '#2D80D3',
          },
          orange: {
            DEFAULT: '#F49A04',
          },
          gray: {
            DEFAULT: '#F2F2F2',
            light: '#f0f0f0',
            dark: '#131313',
          }
        },
    },
    plugins: [],
  }
}
