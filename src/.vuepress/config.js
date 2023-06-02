module.exports = {
  dest: 'docs',
  base: '/portfolio/',
  lang: 'es-ES',
  title: 'H de Herdez',
  description: 'H de Herdez es la guía de guías',
  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    nav: [
      {
        text: 'Mi GitHub',
        link: 'https://github.com/mherdez'
      },
    //   {
    //     text: 'Markdown',
    //     link: 'https://programminghistorian.org/es/lecciones/introduccion-a-markdown'
    //   },
      // {
      //   text: 'MDN web docs. Introducción a los objetos',
      //   link: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects'
      // },
      // {
      //   text: 'Javscript.info: Objects - the basics',
      //   link: 'https://javascript.info/object-basics'
      // },
      // {
      //   text: 'PokeApi',
      //   link: 'https://pokeapi.co/'
      // },
    ],
    sidebar: [
      '/',
      // '/pages/01-introduccion',
      // '/pages/02-clases',
      // '/pages/03-encapsulamiento',
      // '/pages/04-herencia',
      // '/pages/05-polimorfismo',
      // '/pages/06-abstraccion',
      // '/pages/07-excepcion',
      // '/pages/08-resumen',
      // '/pages/09-batalla',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
