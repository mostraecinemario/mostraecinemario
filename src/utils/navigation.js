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
      {label: "programação", href: '/programacao'},
      {label: "cinema itinerante", href: '/cinema-itinerante'},
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
