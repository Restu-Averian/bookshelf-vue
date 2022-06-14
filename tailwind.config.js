module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow:{
        'custom': '8px 8px 9px #91CBA5',
        'custom-hapus': '8px 8px 9px #F3E7DF',
        'custom-udhbaca': '8px 8px 9px #D7F0DF',
        'custom-blmbaca': '8px 8px 9px #C3F5F5',
        'custom-edit': '8px 8px 9px #F3F3C5',
        'custom-inner': 'inset 0px 4px 4px #91cba5'
      },
      colors:{
        'primary':'#71B589',
        'primary-hover':'#91CBA5',
        'primary-active':'#2B7946',


        'danger':'#FF8787',
        'danger-hover':'#FBB3B3',
        'danger-active':'#9F3232'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
