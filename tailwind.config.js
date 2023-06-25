/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-0':
          "url('https://i.pinimg.com/564x/3c/2a/d6/3c2ad67c7c39f0494383ed292de26df6.jpg')",
        'img-1':
          "url('https://i.pinimg.com/564x/1d/02/e5/1d02e59943484097a2c20c17e6f1a3b2.jpg')",
        'img-2':
          "url('https://i.pinimg.com/236x/61/4c/37/614c3751cd2962731d7b9ccb9d9cba6e.jpg')",
        'img-3':
          "url('https://i.pinimg.com/236x/30/dd/37/30dd370b095a95bafee55edadb7eed0c.jpg')",
        'img-4':
          "url('https://i.pinimg.com/236x/6e/98/58/6e9858c0b68c89867621660892602d8a.jpg')",
        'img-5':
          "url('https://i.pinimg.com/236x/82/30/b1/8230b103ff7f8568aac3a7ba3460da45.jpg')",
        'img-6':
          "url('https://i.pinimg.com/236x/2b/ec/fc/2becfcb6411492e9e6a56d65ac2c9eee.jpg')",
        'img-7':
          "url('https://i.pinimg.com/236x/6d/27/ef/6d27ef3bdabed3b3e5595e7fd2b61a7e.jpg')",
        'img-8':
          "url('https://i.pinimg.com/236x/98/b0/be/98b0be796f80ee754f133f2523b71030.jpg')"
      }
    }
  },
  plugins: []
}
