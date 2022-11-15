const Navigation = {
  aMostra: {
    label: "A mostra",
    children: [
      {label: "Edições passadas", href: '/edicoes-passadas'},
      {label: "Ficha Técnica", href: '/ficha-tecnica'}
    ]
  },
  atividades: {
    label: "Edição 2022",
    children: [
      {label: "4ªMCLARG", href: '/4mclarg'},
      {label: "Filmes", href: '/filmes'}
    ]
  },
  filmes: {
    label: "Programação",
    href: '/programacao'
  },
  mapa: {
    label: "exibições",
    href: '/exibicoes'
  },
  oficinas: {
    label: "oficinas",
    href: '/oficinas'
  },
};

export default Navigation;
