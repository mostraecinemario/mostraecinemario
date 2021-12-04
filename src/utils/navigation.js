const Navigation = {
  aMostra: {
    label: "A Mostra",
    children: [
      {label: "Sobre", href: '/sobre'},
      {label: "Ficha Técnica", href: '/ficha-tecnica'}
    ]
  },
  filmes: {
    label: "Filmes",
    children: [
      {label: "curtas latino-americanos", href: '/curtas-latino-americanos'},
      {label: "cinemas insurgentes", href: '/cinemas-insurgentes'}
    ]
  },
  atividades: {
    label: "Atividades",
    children: [
      {label: "Lives", href: '/atividades/cine-debate', isDisabled: true},
      {label: "Cine drive-in", href: '/drive-in'}
    ]
  }
};

export default Navigation;
