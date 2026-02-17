import unhas01 from './assets/images/cortes/unhas-01.webp';
import unhas02 from './assets/images/cortes/unhas-02.webp';
import unhas03 from './assets/images/cortes/unhas-03.webp';
import unhas04 from './assets/images/cortes/unhas-04.webp';

import espaco01 from './assets/images/interior/espaco-01.webp';
import espaco02 from './assets/images/interior/espaco-02.webp';
import espaco03 from './assets/images/interior/espaco-03.webp';
import espaco04 from './assets/images/interior/espaco-04.webp';

export const BUSINESS_INFO = {
  name: "FB HUB",
  owner: "Rosi Cangueiro",
  team: ["Giana", "Constança"],
  phone: '+351 912 413 847', 
  address: 'R. das Piçarras 66 1A',
  city: '2715-645 Montelavar',
  openingHours: 'Segunda a Sábado: 09:00 - 19:00',
  bookingUrl: 'https://wa.me/351912413847', 
  googleMapsUrl: 'https://maps.app.goo.gl/h5kqFvuqEUGLKe9G6',
  instagramUrl: 'https://instagram.com/rosicangueiro' // Ajuste se for diferente
};

export const SERVICES = [
  { id: 1, name: 'Unhas de Gel/Acrílico', description: 'Extensão e fortalecimento com acabamento natural e duradouro.', price: 'Sob Consulta' },
  { id: 2, name: 'Extensão de Pestanas', description: 'Olhar realçado com técnica fio a fio ou volume russo.', price: 'Sob Consulta' },
  { id: 3, name: 'Manicure Combinada', description: 'Cuidado profundo das cutículas e esmaltação perfeita.', price: 'Sob Consulta' },
  { id: 4, name: 'Depilação a Laser', description: 'Tecnologia de ponta para uma pele suave e livre de pelos.', price: 'Sob Consulta' }
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Michelle Benfica',
    date: 'Há 8 meses',
    text: 'Percebi que não estava apenas a cuidar das unhas e pestanas, mas também da alma. Aqui fui acolhida - encontrei amigas.',
    avatar: 'https://ui-avatars.com/api/?name=Michelle+Benfica&background=a7f3d0&color=065f46'
  },
  {
    id: 2,
    author: 'Filipa Ferreira',
    date: 'Há 3 meses',
    text: 'Sinto-me em casa. Profissionais altamente qualificadas, com um rigor e higiene excepcionais! As melhores!',
    avatar: 'https://ui-avatars.com/api/?name=Filipa+Ferreira&background=a7f3d0&color=065f46'
  },
  {
    id: 3,
    author: 'Constança Sequeira',
    date: 'Há 5 meses',
    text: 'Uma qualidade que vem de trás... e agora um espaço novo. Sempre a crescer e a evoluir. Parabéns!',
    avatar: 'https://ui-avatars.com/api/?name=Constanca+Nunes&background=a7f3d0&color=065f46'
  }
];

export const IMAGES = {
  cortes: [ // Mantendo a chave "cortes" para não quebrar o código, mas referindo a unhas
    { id: 1, url: unhas01, alt: 'Unhas Acrílicas FB HUB' },
    { id: 2, url: unhas02, alt: 'Extensão de Pestanas' },
    { id: 3, url: unhas03, alt: 'Nail Art Exclusiva' },
    { id: 4, url: unhas04, alt: 'Manicure Premium' },
  ],
  interior: [
    { id: 1, url: espaco01, alt: 'Recepção FB HUB' },
    { id: 2, url: espaco02, alt: 'Espaço de Atendimento' },
    { id: 3, url: espaco03, alt: 'Detalhes Bambu e Luz' },
    { id: 4, url: espaco04, alt: 'Ambiente Zen' },
  ]
};