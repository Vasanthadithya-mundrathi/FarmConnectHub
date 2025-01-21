/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B5E20',      // Dark green
        secondary: '#43A047',    // Medium green
        accent: '#81C784',       // Light green
        success: '#4CAF50',      // Success green
        warning: '#FFA000',      // Warning amber
        error: '#D32F2F',        // Error red
        background: '#F5F5F5',   // Light gray background
        surface: '#FFFFFF',      // White surface
        text: {
          primary: '#212121',    // Dark text
          secondary: '#757575',  // Medium text
          disabled: '#9E9E9E',   // Light text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.1)',
        elevated: '0 4px 6px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
