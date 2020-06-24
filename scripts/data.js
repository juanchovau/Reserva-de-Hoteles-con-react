const today = new Date();
const hoteles =[
    {nombre:"100 Luxury Suites",
     descripcion:"Cerca del WTC, parque de la 93, spa de cortesía, aceptamos mascotas y hay transporte gratis para suites presidenciales.",
     ciudad:"Bogotá",
     pais:"Colombia",
     tamanio:40,
     precio:"$$$$",
     imagen:"./images/100-Luxury -Suites1.jpg",
     imagen2:"./images/100-Luxury -Suites2.jpg",
     imagen3:"./images/100-Luxury -Suites3.jpg",
     id:1,
     availabilityFrom: today.valueOf(),
     availabilityTo: today.valueOf() + 864000000, // 10 days
    },
    {nombre:"Salvio Parque 93",
    descripcion:"A 6,5 km de Centro de la ciudad A 11 km del aeropuerto Internacional El Dorado",
    ciudad:"Bogotá",
    pais:"Colombia",
    tamanio:20,
    precio:"$$$",
    imagen:"./images/Salvio-Parque-93-1.jpg",
    imagen2:"./images/Salvio-Parque-93-2.jpg",
    imagen3:"./images/Salvio-Parque-93-3.jpg",
    id:2,
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
   },
   {nombre:"NH Bogotá Boheme Royal",
   descripcion:"El Hotel NH Bogotá Boheme Royal se ubica en la exclusiva Zona T, famosa por sus tiendas, restaurantes y animada vida nocturna.",
   ciudad:"Bogotá",
   pais:"Colombia",
   tamanio: 100,
   precio:"$$$$", 
   imagen:"./images/NH-Bogotá-Boheme-Royal1.jpg",
   imagen2:"./images/NH-Bogotá-Boheme-Royal2.jpg",
   imagen3:"./images/NH-Bogotá-Boheme-Royal3.jpg",
   id:3,
   availabilityFrom: today.valueOf(),
   availabilityTo: today.valueOf() + 864000000, // 10 days
   },
   {nombre:"Ariston's",
     descripcion:"Se encuentra ubicado en el barrio Quinta Paredes a una manzana de Corferías. ",
     ciudad:"Bogotá",
     pais:"Colombia",
    tamanio:20,
    precio:"$$",
    imagen:"./images/Ariston's1.jpg",
    imagen2:"./images/Ariston's2.jpg",
    imagen3:"./images/Ariston's3.jpg",
     id:4,
     availabilityFrom: today.valueOf(),
     availabilityTo: today.valueOf() + 864000000, // 10 days
  },
  {nombre:"GHL Hotel Capital",
    descripcion:"Emplazado en la ciudad de Bogotá se encuentra el GHL Hotel Capital, un lujoso alojamiento de 5 estrellas que se caracteriza por su estilo moderno y urbano.",
    ciudad:"Bogotá",
    pais:"Colombia",
    tamanio:150,
    precio:"$$$$", 
    imagen:"./images/GHL-Hotel-Capital1.jpg",
    imagen2:"./images/GHL-Hotel-Capital2.jpg",
    imagen3:"./images/GHL-Hotel-Capital3.jpg",
    id:5,
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
},
{
    slug: 'la-bamba-de-areco',
    nombre: 'La Bamba de Areco',
    imagen: './images/la-bamba-de-areco1.png',
    imagen2:"./images/la-bamba-de-areco2.png",
    imagen3:"./images/la-bamba-de-areco3.png",
    descripcion: 'La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    tamanio: 11,
    ciudad: 'Buenos Aires',
    pais: 'Argentina',
    precio: "$$$$"
  },
  {
    slug: 'sainte-jeanne',
    nombre: 'Sainte Jeanne Boutique',
    imagen: './images/sainte-jeanne1.png',
    imagen2:'./images/sainte-jeanne2.png',
    imagen3:'./images/sainte-jeanne3.png',
    descripcion: 'Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    tamanio: 23,
    ciudad: 'Mar del Plata',
    pais: 'Argentina',
    precio: "$$"
  },
  {
    slug: 'entre-cielos',
    nombre: 'Entre Cielos',
    imagen: './images/entre-cielos1.png',
    imagen2:'./images/entre-cielos2.png',
    imagen3:'./images/entre-cielos3.png',
    descripcion: 'Ubicado en una de las regiones vitivinícolas más grandes de América Latina, Entre Cielos fue pensado y construido en un campo de 8 hectáreas rodeado de viñedos malbec y una imponente vista de la Cordillera de Los Andes.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    tamanio: 16,
    ciudad: 'Mendoza',
    pais: 'Argentina',
    precio: "$$$$"
  },
  {
    slug: 'huacalera',
    nombre: 'Hotel Huacalera',
    imagen: './images/huacalera1.png',
    imagen2:'./images/huacalera2.png',
    imagen3:'./images/huacalera3.png',
    descripcion: 'Esta casona neocolonial, construida en la década de 1940, está ubicada en el corazón de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas montañosas, recorrido por el Río Grande y declarado Patrimonio de la Humanidad en 2003.',
    availabilityFrom: today.valueOf() + 1728000000, // 20 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    tamanio: 32,
    ciudad: 'Jujuy',
    pais: 'Argentina',
    precio: "$"
  },
  {
    slug: 'merced-del-alto',
    nombre: 'La Merced del Alto',
    imagen: './images/merced-del-alto1.png',
    imagen2:'./images/merced-del-alto2.png',
    imagen3:'./images/merced-del-alto3.png',
    descripcion: 'Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, ríos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaquíes o simplemente a disfrutar de la paz del lugar.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    tamanio: 14,
    ciudad: 'Salta',
    pais: 'Argentina',
    precio: "$$"
  },
  {
    slug: 'azur-real',
    nombre: 'Azur Real Hotel',
    imagen: './images/azur-real1.png',
    imagen2:'./images/azur-real2.png',
    imagen3:'./images/azur-real3.png',
    descripcion: 'La exclusividad rodeada de historia. Azur Real Hotel Boutique está ubicado en el corazón de la zona comercial y el centro histórico de Córdoba, dentro de uno de los principales circuitos culturales y turísticos de la ciudad.',
    availabilityFrom: today.valueOf() + 1296000000, // 15 days 
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    tamanio: 16,
    ciudad: 'Córdoba',
    pais: 'Argentina',
    precio: "$"
  },
  {
    slug: 'rincon-del-socorro',
    nombre: 'Rincón del Socorro',
    imagen: './images/rincon-del-socorro1.png',
    imagen2:'./images/rincon-del-socorro2.png',
    imagen3:'./images/rincon-del-socorro3.png',
    descripcion: 'Rincón del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iberá, un santuario de vida silvestre, donde la Fundación Conservation Land Trust decidió desarrollar un ambicioso proyecto de recuperación y conservación.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    tamanio: 11,
    ciudad: 'Corrientes',
    pais: 'Argentina',
    precio: "$$"
  },
  {
    slug: 'luma-casa-de-montana',
    nombre: 'Luma Casa de Montaña',
    imagen: './images/luma-casa-de-montana1.png',
    imagen2:'./images/luma-casa-de-montana2.png',
    imagen3:'./images/luma-casa-de-montana3.png',
    descripcion: 'Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Montaña se presenta majestuosa pero a la vez simple y hogareña: un lugar diferente, atemporal y mágico.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    tamanio: 8,
    ciudad: 'Villa La Angostura',
    pais: 'Argentina',
    precio: "$$"
  },
  {
    slug: 'casa-turquesa',
    nombre: 'Casa Turquesa',
    imagen: './images/casa-turquesa1.png',
    imagen2:'./images/casa-turquesa2.png',
    imagen3:'./images/casa-turquesa3.png',
    descripcion: 'Casa Turquesa es una histórica mansión del siglo XVIII que recrea el encanto típico de Paraty, una de las herencias coloniales más bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    tamanio: 9,
    ciudad: 'Río de Janeiro',
    pais: 'Brasil',
    precio: "$$$"
  },
  {
    slug: 'vila-da-santa',
    nombre: 'Vila Da Santa',
    imagen: './images/vila-da-santa1.png',
    imagen2:'./images/vila-da-santa2.png',
    imagen3:'./images/vila-da-santa3.png',
    descripcion: 'Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su espíritu original. Se abre a un gran patio central con dos piscinas de diseño, una de ellas climatizada.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    tamanio: 19,
    ciudad: 'Buzios',
    pais: 'Brasil',
    precio: "$$$"
  },
  {
    slug: 'uxua-casa',
    nombre: 'UXUA Casa Hotel & Spa',
    imagen: './images/uxua-casa1.png',
    imagen2:'./images/uxua-casa2.png',
    imagen3:'./images/uxua-casa3.png',
    descripcion: 'UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extraídos de la selva.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    tamanio: 11,
    ciudad: 'Bahía',
    pais: 'Brasil',
    precio: "$$$$"
  },
  {
    slug: 'ponta-dos-ganchos',
    nombre: 'Ponta dos Ganchos',
    imagen: './images/ponta-dos-ganchos1.png',
    imagen2:'./images/ponta-dos-ganchos2.png',
    imagen3:'./images/ponta-dos-ganchos3.png',
    descripcion: 'Ubicado a pasos de San Pablo, Río de Janeiro, e incluso Buenos Aires, en una península privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa más exclusivos del sur de Brasil.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 864000000, // 10 days
    tamanio: 25,
    ciudad: 'Santa Catarina',
    pais: 'Brasil',
    precio: "$$$$"
  },
  {
    slug: 'alto-atacama',
    nombre: 'Alto Atacama',
    imagen: './images/alto-atacama1.png',
    imagen2:'./images/alto-atacama2.png',
    imagen3:'./images/alto-atacama3.png',
    descripcion: 'Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukará de Quitor en el imponente desierto de Atacama al norte de Chile.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    tamanio: 42,
    ciudad: 'San Pedro de Atacama',
    pais: 'Chile',
    precio: "$$$$"
  },
  {
    slug: 'tierra-patagonia',
    nombre: 'Tierra Patagonia',
    imagen: './images/tierra-patagonia1.png',
    imagen2:'./images/tierra-patagonia2.png',
    imagen3:'./images/tierra-patagonia3.png',
    descripcion: 'Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de montañas, cascadas, glaciares, lagos y peñascos, declarado Reserva de la Biosfera por la UNESCO en 1978.',
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    tamanio: 40,
    ciudad: 'Torres del Paine',
    pais: 'Chile',
    precio: "$$$$"
  },
  {
    slug: 'vira-vira',
    nombre: 'Vira Vira',
    imagen: './images/vira-vira1.png',
    imagen2:'./images/vira-vira2.png',
    imagen3:'./images/vira-vira3.png',
    descripcion: 'Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicación privilegiada, muy cerca de Pucón, Chile. Su impresionante parque nativo de 23 hectáreas a orillas del río Liucura ofrece un oasis único de paz y tranquilidad.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    tamanio: 21,
    ciudad: 'Pucón',
    pais: 'Chile',
    precio: "$$$$"
  },
  {
    slug: 'vik-chile',
    nombre: 'Vik Chile',
    imagen: './images/vik-chile1.png',
    imagen2:'./images/vik-chile2.png',
    imagen3:'./images/vik-chile3.png',
    descripcion: 'Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el diseño de vanguardia, una ubicación sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atención por el medioambiente.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    tamanio: 22,
    ciudad: 'Millahue',
    pais: 'Chile',
    precio: "$$$$"
  },
  {
    slug: 'casa-higueras',
    nombre: 'Casa Higueras',
    imagen: './images/casa-higueras1.png',
    imagen2:'./images/casa-higueras2.png',
    imagen3:'./images/casa-higueras3.png',
    descripcion: 'Ubicada en el corazón del Cerro Alegre, frente a la imponente bahía de Valparaíso, se encuentra Casa Higueras, el primer hotel boutique y de diseño del puerto.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    tamanio: 20,
    ciudad: 'Valparaíso',
    pais: 'Chile',
    precio: "$$$$"
  },
  {
    slug: 'campo-tinto',
    nombre: 'Campo Tinto',
    imagen: './images/campo-tinto1.png',
    imagen2:'./images/campo-tinto2.png',
    imagen3:'./images/campo-tinto3.png',
    descripcion: 'Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.',
    availabilityFrom: today.valueOf() + 2160000000, // 25 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    tamanio: 4,
    ciudad: 'Colonia',
    pais: 'Uruguay',
    precio: "$"
  }
]