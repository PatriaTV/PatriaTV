import companies from './companies';

const movies = [
  {
    id: 1,
    title: "Le Retour de Mary Poppins",
    company: companies.disney,
    description: "Londres, années 1930, durant la grande dépression. Devenu adulte, Michael Banks travaille à la banque où son père était employé et vit toujours au 17, allée des Cerisiers avec ses trois enfants - Annabel, Georgie et John - et leur gouvernante Ellen. Comme sa mère avant elle, Jane Banks se bat pour les droits des ouvriers et apporte son aide à la famille de Michael. Lorsque cette dernière subit une perte tragique, Mary Poppins réapparaît magiquement dans leur vie. Avec l’aide de son ami Jack - l’allumeur de réverbères toujours optimiste -, elle va tout faire pour que la joie et l’émerveillement reviennent dans leur existence. Elle leur fera aussi découvrir de nouveaux personnages pleins de fantaisie, dont sa cousine, l’excentrique Topsy.",
    releaseDate: "2018-12-19",
    duration: 130,
    image: "mDf5VyQalkG6lt0sQK4LU6Gmjys.jpg",
    video: "https://www.youtube.com/embed/5BW_1D5byw8",
    highlighted: false
  },
  {
    id: 2,
    title: "Avengers : Infinity War",
    company: companies.marvel,
    description: "Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.",
    releaseDate: "2018-04-27",
    duration: 149,
    image: "hSfuKPtyEryeFzapZ8UgZd4aESu.jpg",
    video: "https://www.youtube.com/embed/eIWs2IUr3Vs",
    highlighted: false
  },
  {
    id: 3,
    title: "Avengers : Endgame",
    company: companies.marvel,
    description: "Après leur défaite face au Titan Thanos qui dans le film précédent s'est approprié toutes les pierres du Gant de l'infini , les Avengers et les Gardiens de la Galaxie ayant survécu à son claquement de doigts qui a pulvérisé « la moitié de toute forme de vie dans l'Univers », Captain America, Thor, Bruce Banner, Natasha Romanoff, War Machine, Tony Stark, Nébula et Rocket, vont essayer de trouver une solution pour ramener leurs coéquipiers disparus et vaincre Thanos en se faisant aider par Ronin alias Clint Barton, Captain Marvel et Ant-Man.",
    releaseDate: "2019-04-26",
    duration: 180,
    image: "zEGv6yg9G19yqdvMo2dQy2OqKCI.jpg",
    video: "https://www.youtube.com/embed/wV-Q0o2OQjQ",
    highlighted: true
  },
  {
    id: 4,
    title: "Les Indestructibles 2",
    company: companies.pixar,
    description: "Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.",
    releaseDate: "2018-06-15",
    duration: 118,
    image: "Apish2YD3QIAepzxZ96VLkqEZo3.jpg",
    video: "https://www.youtube.com/embed/sXsr_7Una_A",
    highlighted: false
  },
  {
    id: 5,
    title: "Star Wars : L'Empire contre-attaque",
    company: companies.starwars,
    description: "Malgré la destruction de l’Étoile Noire, l'Empire maintient son emprise sur la galaxie, et poursuit sans relâche sa lutte contre l'Alliance rebelle. Basés sur la planète glacée de Hoth, les rebelles essuient un assaut des troupes impériales. Parvenus à s'échapper, la princesse Leia, Han Solo, Chewbacca et C-3P0 se dirigent vers Bespin, la cité des nuages gouvernée par Lando Calrissian, ancien compagnon de Han. Suivant les instructions d'Obi-Wan Kenobi, Luke Skywalker se rend quant à lui vers le système de Dagobah, planète marécageuse où il doit recevoir l'enseignement du dernier maître Jedi, Yoda. Apprenant l'arrestation de ses compagnons par les stormtroopers de Dark Vador après la trahison de Lando, Luke décide d'interrompre son entraînement pour porter secours à ses amis et affronter le sombre seigneur Sith...",
    releaseDate: "1980-05-17",
    duration: 124,
    image: "nqY9dJeRaSEJlmljOpPA5Tc9moQ.jpg",
    video: "https://www.youtube.com/embed/jW4izGv_kjI",
    highlighted: false
  },
  {
    id: 6,
    title: "Star Wars : Le Retour du Jedi",
    company: companies.starwars,
    description: "L'Empire galactique est plus puissant que jamais : la construction de la nouvelle arme, l’Étoile de la Mort, menace l'univers tout entier... Arrêté après la trahison de Lando Calrissian, Han Solo est remis à l'ignoble contrebandier Jabba Le Hutt par le chasseur de primes Boba Fett. Après l'échec d'une première tentative d'évasion menée par la princesse Leia, également arrêtée par Jabba, Luke Skywalker et Lando parviennent à libérer leurs amis. Han, Leia, Chewbacca, C-3PO et Luke, devenu un Jedi, s'envolent dès lors pour une mission d'extrême importance sur la lune forestière d'Endor, afin de détruire le générateur du bouclier de l’Étoile de la Mort et permettre une attaque des pilotes de l'Alliance rebelle. Conscient d'être un danger pour ses compagnons, Luke préfère se rendre aux mains de Dark Vador, son père et ancien Jedi passé du côté obscur de la Force.",
    releaseDate: "1983-05-25",
    duration: 133,
    image: "kBjuLfGqNRsby9TzWQaTlAUe3LB.jpg",
    video: "https://www.youtube.com/embed/KMYjFXgN9Z8",
    highlighted: false
  },
  {
    id: 7,
    title: "Star Wars : Le Réveil de la Force",
    company: companies.starwars,
    description: "Il y a bien longtemps, dans une galaxie lointaine… Luke Skywalker est porté disparu. Le pilote Poe est en mission secrète sur une planète pour le retrouver. Au moment où la diabolique armée \"Premier Ordre\" apparaît en détruisant tout sur son passage, il arrive à cacher la position géographique de l'ancien maître Jedi dans son droïde BB-8. Capturé par les larbins du machiavélique Kylo Ren, Poe est libéré par le soldat ennemi Finn qui est en pleine crise existentielle. Pendant ce temps, BB-8 est recueillie par Rey, une pilleuse d'épaves qui sera bientôt plongée dans une quête qui la dépasse.",
    releaseDate: "2015-12-18",
    duration: 135,
    image: "njv65RTipNSTozFLuF85jL0bcQe.jpg",
    video: "https://www.youtube.com/embed/mH9Ygfs5avo",
    highlighted: false
  },
  {
    id: 8,
    title: "Star Wars : Les Derniers Jedi",
    company: companies.starwars,
    description: "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé...",
    releaseDate: "2017-12-15",
    duration: 152,
    image: "prV3qBW4CqFsH14CEQNslnwvqWi.jpg",
    video: "https://www.youtube.com/embed/wY708Ky2SG8",
    highlighted: false
  }
];

export default movies;