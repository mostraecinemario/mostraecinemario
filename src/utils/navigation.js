const Navigation = {
  atividades: {
    label: "Esta edição",
    children: [
      {label: "Curadoria", href: '/curadoria'}
    ]
  },
  filmes: {
    label: "Programação",
    children: [
      {label: "oficinas", href: '/oficinas'},
      {label: "cinema itinerante", href: '/cinema-itinerante'},
      {label: "mesas", href: '/mesas'}
    ]
  },
  aMostra: {
    label: "Histórico",
    children: [
      {label: "Edições passadas", href: '/edicoes-passadas'},
      {label: "Ficha Técnica", href: '/ficha-tecnica'}
    ]
  },
};

export default Navigation;
