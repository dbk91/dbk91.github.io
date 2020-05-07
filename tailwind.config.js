module.exports = {
  purge: [],
  theme: {
    extend: {},
    boxShadow: {
      custom: 'inset -6px -4px rgba(255, 145, 0)',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'odd'],
    display: ['responsive', 'hover'],
    width: ['responsive', 'group-hover'],
  },
  plugins: [],
}
