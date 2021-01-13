module.exports = {
    title: '',
    description: 'Manual ciudadano',
    themeConfig: {
        logo: '/img/logo_color.png',
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Manual', link: '/content/' },
         
        ],
        displayAllHeaders: true,
        sidebar:{
            '/content/' :[
                'crear-usuario',
                'modificar-mis-datos',
                'iniciar-sesion',
                'iniciar-tramite'
            ]
        }
      }
  }