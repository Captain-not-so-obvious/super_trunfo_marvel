const MARVEL_CHARACTERS = [
  {
    "nome": "Marvel Azul",
    "inteligencia": 6,
    "forca": 7,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Adam Warlock",
    "inteligencia": 3,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 2
  },
  {
    "nome": "Abutre",
    "inteligencia": 5,
    "forca": 3,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Rainha-Aranha",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Le Peregrino",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 3,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 5
  },
  {
    "nome": "Angela",
    "inteligencia": 3,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Destrutor",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 5,
    "combate": 3
  },
  {
    "nome": "Homem de Ferro",
    "inteligencia": 6,
    "forca": 6,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Garota-Aranha",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Arkon",
    "inteligencia": 2,
    "forca": 6,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 1,
    "combate": 5
  },
  {
    "nome": "Ashema, a Ouvinte",
    "inteligencia": 7,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 2
  },
  {
    "nome": "Tio Ben",
    "inteligencia": 2,
    "forca": 1,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 1
  },
  {
    "nome": "Ben Ulrich",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Beyonder",
    "inteligencia": 7,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 6
  },
  {
    "nome": "Raio Negro",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Capitão Avalon",
    "inteligencia": 5,
    "forca": 6,
    "velocidade": 4,
    "durabilidade": 6,
    "projecaoEnergia": 3,
    "combate": 4
  },
  {
    "nome": "Hulk",
    "inteligencia": 2,
    "forca": 7,
    "velocidade": 3,
    "durabilidade": 7,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Tiwaz",
    "inteligencia": 4,
    "forca": 6,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Fanático",
    "inteligencia": 2,
    "forca": 7,
    "velocidade": 2,
    "durabilidade": 7,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Capitã Marvel",
    "inteligencia": 3,
    "forca": 5,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Professor X",
    "inteligencia": 5,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 5,
    "combate": 3
  },
  {
    "nome": "Teia de Seda",
    "inteligencia": 3,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Carnificina",
    "inteligencia": 2,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 4,
    "combate": 2
  },
  {
    "nome": "Gavião Arqueiro",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Cristalys",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 4,
    "combate": 3
  },
  {
    "nome": "Lagarto",
    "inteligencia": 5,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Tremor",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 5,
    "combate": 6
  },
  {
    "nome": "Cavaleiro Negro",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 4,
    "combate": 5
  },
  {
    "nome": "Punho de Ferro",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 3,
    "combate": 6
  },
  {
    "nome": "Darren Cross",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 6,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Garota Esquilo",
    "inteligencia": 3,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Dormammu",
    "inteligencia": 6,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 4
  },
  {
    "nome": "Venom",
    "inteligencia": 3,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 6,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Edwin Jarvis",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Elektra",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Capitã Britânia",
    "inteligencia": 2,
    "forca": 6,
    "velocidade": 4,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Rainha Branca",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 4,
    "combate": 3
  },
  {
    "nome": "En Sabah Nur",
    "inteligencia": 6,
    "forca": 7,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 3
  },
  {
    "nome": "Blade",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 5
  },
  {
    "nome": "Trovejante",
    "inteligencia": 2,
    "forca": 5,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 3
  },
  {
    "nome": "Agente Anti-Venom",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 6,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Gata Negra",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 2,
    "projecaoEnergia": 3,
    "combate": 3
  },
  {
    "nome": "Forge",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Bazuca",
    "inteligencia": 1,
    "forca": 3,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Galactus",
    "inteligencia": 7,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 2
  },
  {
    "nome": "Fóton",
    "inteligencia": 2,
    "forca": 5,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 6,
    "combate": 3
  },
  {
    "nome": "M.O.D.O.K",
    "inteligencia": 6,
    "forca": 5,
    "velocidade": 7,
    "durabilidade": 5,
    "projecaoEnergia": 6,
    "combate": 1
  },
  {
    "nome": "Gwen Stacy",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 1
  },
  {
    "nome": "Fera",
    "inteligencia": 5,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Homem-Formiga ( Hank Pym )",
    "inteligencia": 6,
    "forca": 7,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 6,
    "combate": 3
  },
  {
    "nome": "Shocker",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 5,
    "combate": 2
  },
  {
    "nome": "Howard Stark",
    "inteligencia": 5,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Soldado Invernal",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Wolverine",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 2,
    "combate": 7
  },
  {
    "nome": "Máquina de Combate",
    "inteligencia": 3,
    "forca": 6,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Jane Foster ( Thor )",
    "inteligencia": 3,
    "forca": 7,
    "velocidade": 4,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 3
  },
  {
    "nome": "Vespa",
    "inteligencia": 3,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 2,
    "projecaoEnergia": 4,
    "combate": 4
  },
  {
    "nome": "Jasper Sitwell",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Mulher-Aranha",
    "inteligencia": 3,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 4,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Jessica Jones",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Caveira Vermelha",
    "inteligencia": 5,
    "forca": 3,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "J. Jonah Jameson",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Motoqueiro Fantasma",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 4,
    "combate": 2
  },
  {
    "nome": "Tocha Humana",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 3
  },
  {
    "nome": "Agente Americano",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 2,
    "combate": 4
  },
  {
    "nome": "Esmagador Hogan",
    "inteligencia": 2,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Aranha Escarlate",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 2,
    "combate": 4
  },
  {
    "nome": "Miss Marvel ( Kamala Khan )",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Apátrida",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 5
  },
  {
    "nome": "Knull",
    "inteligencia": 6,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Krakoa",
    "inteligencia": 1,
    "forca": 7,
    "velocidade": 1,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 1
  },
  {
    "nome": "Noturno",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 7,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Falcão Noturno",
    "inteligencia": 3,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 4,
    "combate": 4
  },
  {
    "nome": "Wolverine ( X-23 )",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 3,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Luke Cage",
    "inteligencia": 3,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Escorpião",
    "inteligencia": 2,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Capitão Marvel",
    "inteligencia": 3,
    "forca": 4,
    "velocidade": 7,
    "durabilidade": 3,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Peggy Carter",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Maria Hill",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Maria Stark",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Mary Jane Watson",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Demolidor",
    "inteligencia": 3,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 4,
    "combate": 5
  },
  {
    "nome": "Magneto",
    "inteligencia": 5,
    "forca": 2,
    "velocidade": 5,
    "durabilidade": 2,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Electro",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 5,
    "combate": 2
  },
  {
    "nome": "Mefisto",
    "inteligencia": 7,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 2
  },
  {
    "nome": "Aranha Escarlate ( Michael Van Patrick )",
    "inteligencia": 2,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 4,
    "combate": 4
  },
  {
    "nome": "Homem-Aranha ( Miguel O’Hara )",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 4,
    "durabilidade": 3,
    "projecaoEnergia": 2,
    "combate": 2
  },
  {
    "nome": "Chacal",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Espectro",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 6,
    "durabilidade": 4,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Namor",
    "inteligencia": 2,
    "forca": 6,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 2,
    "combate": 4
  },
  {
    "nome": "Viúva Negra",
    "inteligencia": 3,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 3,
    "combate": 6
  },
  {
    "nome": "Cavaleiro Negro",
    "inteligencia": 5,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 6,
    "combate": 3
  },
  {
    "nome": "Senhor Sinistro",
    "inteligencia": 5,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 7,
    "projecaoEnergia": 4,
    "combate": 4
  },
  {
    "nome": "Kang, O Conquistador",
    "inteligencia": 4,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Nick Fury",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Nick Fury Jr.",
    "inteligencia": 3,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Duende Verde ( Norman Osborn )",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 4,
    "projecaoEnergia": 3,
    "combate": 3
  },
  {
    "nome": "Surfista Prateado",
    "inteligencia": 3,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 6,
    "projecaoEnergia": 7,
    "combate": 2
  },
  {
    "nome": "Monge de Ferro",
    "inteligencia": 5,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 6,
    "combate": 2
  },
  {
    "nome": "Odin Borson",
    "inteligencia": 7,
    "forca": 6,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 4
  },
  {
    "nome": "Tempestade",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 3,
    "durabilidade": 2,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Doutor Octopus",
    "inteligencia": 5,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Homem Molecular",
    "inteligencia": 2,
    "forca": 1,
    "velocidade": 3,
    "durabilidade": 2,
    "projecaoEnergia": 7,
    "combate": 1
  },
  {
    "nome": "Homem-Aranha",
    "inteligencia": 4,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Star Lord",
    "inteligencia": 4,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Philip Sheldon",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Phil Coulson ( Morte )",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 5
  },
  {
    "nome": "Consertador",
    "inteligencia": 5,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 2
  },
  {
    "nome": "Ragnarok",
    "inteligencia": 2,
    "forca": 6,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Mística",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 5
  },
  {
    "nome": "Senhor Fantástico",
    "inteligencia": 6,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 1,
    "combate": 3
  },
  {
    "nome": "Gambit",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 2,
    "combate": 4
  },
  {
    "nome": "Nova",
    "inteligencia": 2,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Espiral",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Homem de Gelo",
    "inteligencia": 2,
    "forca": 3,
    "velocidade": 3,
    "durabilidade": 4,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Sentinela ( Sentry )",
    "inteligencia": 5,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 2
  },
  {
    "nome": "Motorista Fantasma",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 3,
    "combate": 4
  },
  {
    "nome": "Rocket Racoon",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Nova ( Samuel Alexander )",
    "inteligencia": 2,
    "forca": 6,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 3
  },
  {
    "nome": "Capitão América ( Sam Wilson )",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 3,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Homem-Formiga ( Scott Lang )",
    "inteligencia": 4,
    "forca": 5,
    "velocidade": 3,
    "durabilidade": 5,
    "projecaoEnergia": 3,
    "combate": 4
  },
  {
    "nome": "Ciclope",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Kraven, O Caçador",
    "inteligencia": 3,
    "forca": 4,
    "velocidade": 3,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Shang-Chi",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 7
  },
  {
    "nome": "Sprite",
    "inteligencia": 5,
    "forca": 4,
    "velocidade": 4,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 2
  },
  {
    "nome": "Doutor Estranho",
    "inteligencia": 4,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 6,
    "combate": 6
  },
  {
    "nome": "Capitão América",
    "inteligencia": 3,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Mulher Invisível",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 3
  },
  {
    "nome": "Pantera Negra",
    "inteligencia": 5,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 3,
    "projecaoEnergia": 3,
    "combate": 5
  },
  {
    "nome": "Capitã Universo",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 7,
    "combate": 1
  },
  {
    "nome": "Adaga",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 5,
    "combate": 4
  },
  {
    "nome": "Hulk Vermelho",
    "inteligencia": 3,
    "forca": 7,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 2,
    "combate": 4
  },
  {
    "nome": "Thanos",
    "inteligencia": 6,
    "forca": 7,
    "velocidade": 3,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Anjo ( Thomas Holloway )",
    "inteligencia": 4,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Thor Odinson",
    "inteligencia": 2,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Tiamut, Celestial Sonhador",
    "inteligencia": 7,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 2
  },
  {
    "nome": "Manto",
    "inteligencia": 2,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 5,
    "projecaoEnergia": 3,
    "combate": 2
  },
  {
    "nome": "O Vigia",
    "inteligencia": 7,
    "forca": 7,
    "velocidade": 7,
    "durabilidade": 7,
    "projecaoEnergia": 7,
    "combate": 1
  },
  {
    "nome": "Ultron",
    "inteligencia": 4,
    "forca": 6,
    "velocidade": 3,
    "durabilidade": 7,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Valeria Richards",
    "inteligencia": 6,
    "forca": 3,
    "velocidade": 7,
    "durabilidade": 5,
    "projecaoEnergia": 4,
    "combate": 3
  },
  {
    "nome": "Dentes de Sabre",
    "inteligencia": 2,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Doutor Destino",
    "inteligencia": 6,
    "forca": 4,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Deadpool",
    "inteligencia": 2,
    "forca": 4,
    "velocidade": 2,
    "durabilidade": 4,
    "projecaoEnergia": 1,
    "combate": 6
  },
  {
    "nome": "Feiticeira Escarlate",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 6,
    "combate": 3
  },
  {
    "nome": "Arcanjo",
    "inteligencia": 3,
    "forca": 2,
    "velocidade": 3,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 4
  },
  {
    "nome": "Rei do Crime",
    "inteligencia": 3,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 1,
    "combate": 5
  },
  {
    "nome": "Barão Von Strucker",
    "inteligencia": 4,
    "forca": 3,
    "velocidade": 2,
    "durabilidade": 4,
    "projecaoEnergia": 3,
    "combate": 5
  },
  {
    "nome": "Homem-Púrpura",
    "inteligencia": 2,
    "forca": 2,
    "velocidade": 2,
    "durabilidade": 2,
    "projecaoEnergia": 3,
    "combate": 1
  },
  {
    "nome": "Zeus",
    "inteligencia": 4,
    "forca": 6,
    "velocidade": 3,
    "durabilidade": 7,
    "projecaoEnergia": 6,
    "combate": 4
  },
  {
    "nome": "Hipérion",
    "inteligencia": 2,
    "forca": 6,
    "velocidade": 5,
    "durabilidade": 6,
    "projecaoEnergia": 5,
    "combate": 3
  }
];
