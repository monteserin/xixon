import { bicycleIcon, enduranceIcon, kayakIcon, quadIcon, restaurantIcon, walkIcon, shooterIcon, restaurantJPIcon, restaurantEcuIcon, cocktailIcon, brunchIcon, burguerIcon } from '../../icons';


const data = {
  "origin": [41.3851, 2.1734],//41.37409163897025, 2.1443055559759583
  "targets": [
    {
      "name": "Una Mica de Japó",
      "description": "Restaurante japonés. Recomiendo pedir KatsuKare.",
      "coordinates": [41.38366, 2.15389],
      "address": "Carrer d'Aragó, 104, L'Eixample, 08015 Barcelona",
      "icon": restaurantJPIcon,
      "hours": {
        "lunes": null,
        "martes": [['13:00', '16:00'], ['19:00', '22:00']],
        "miercoles": [['13:00', '16:00'], ['19:00', '22:00']],
        "jueves": [['13:00', '16:00'], ['19:00', '22:00']],
        "viernes": [['13:00', '16:00'], ['19:00', '22:00']],
        "sábado": [['13:00', '16:00'], ['19:00', '22:00']],
        "domingo": null,
      }
    },
    {
      "name": "Yatai",
      "description": "Restaurante japonés. Recomiendo pedir okonomiyaki mixto y tacoyaki.",
      "coordinates": [41.38442, 2.15584],
      "address": "Carrer del Comte d'Urgell, 112, L'Eixample, 08011 Barcelona",
      "icon": restaurantJPIcon,
      "hours": {
        "lunes": null,
        "martes": null,
        "miercoles": [['13:00', '16:00'], ['20:00', '23:00']],
        "jueves": [['13:00', '16:00'], ['20:00', '23:00']],
        "viernes": [['13:00', '16:00'], ['20:00', '23:00']],
        "sábado": [['13:00', '16:00'], ['20:00', '23:00']],
        "domingo": [['13:00', '16:00'], ['20:00', '23:00']],
      }
    },
    {
      "name": "El Manaba",
      "description": "Restaurante ecuatoriano. Recomiendo pedir encebollado.",
      "coordinates": [41.38770940129241, 2.1603743896714964],
      "address": "Carrer d'Aribau, 44, L'Eixample, 08011 Barcelona",
      "icon": restaurantEcuIcon,
      "hours": {
        "lunes": [['12:00', '24:00']],
        "martes": [['12:00', '24:00']],
        "miercoles": [['12:00', '24:00']],
        "jueves": [['12:00', '24:00']],
        "viernes": [['12:00', '24:00']],
        "sábado": [['09:00', '24:00']],
        "domingo": [['09:00', '24:00']],
      }
    },
    {
      "name": "Kawamura",
      "description": "Restaurante japonés. Recomiendo pedir onigiri y okonomiyaki.",
      "coordinates": [41.38964, 2.16114],
      "address": "Carrer d'Aragó, 217, L'Eixample, 08007 Barcelona",
      "icon": restaurantJPIcon,
      "hours": {
        "lunes": [['13:15', '16:00'], ['20:15', '24:00']],
        "martes": [['13:15', '16:00'], ['20:15', '24:00']],
        "miercoles": [['13:15', '16:00'], ['20:15', '24:00']],
        "jueves": [['20:15', '24:00']],
        "viernes": [['13:15', '16:00'], ['20:15', '24:00']],
        "sábado": [['13:15', '16:00'], ['20:15', '24:00']],
        "domingo": [['13:15', '16:00'], ['20:15', '24:00']],
      }
    },
    {
      "name": "El Ñaño Balmes",
      "description": "Restaurante ecuatoriano. Recomiendo pedir encebollado. Le ponen bastante sal, así que no es buena idea para cenar porque te dará sed.",
      "coordinates": [41.38703102188136, 2.165894167740861],
      "address": "Carrer de Balmes, 18, L'Eixample, 08007 Barcelona",
      "icon": restaurantEcuIcon,
      "hours": {
        "lunes": [['12:00', '24:00']],
        "martes": [['12:00', '24:00']],
        "miercoles": [['12:00', '24:00']],
        "jueves": [['12:00', '24:00']],
        "viernes": [['12:00', '24:00']],
        "sábado": [['12:00', '24:00']],
        "domingo": [['12:00', '24:00']],
      }
    },
    {
      "name": "El Ñaño Caminito a Guayaquil",
      "description": "Restaurante ecuatoriano. Recomiendo pedir encebollado. Le ponen bastante sal, así que no es buena idea para cenar porque te dará sed.",
      "coordinates": [41.38163077111698, 2.1510770256194025],
      "address": "Carrer d'Aragó, 54, L'Eixample, 08015 Barcelona",
      "icon": restaurantEcuIcon,
      "hours": {
        "lunes": [['12:00', '24:00']],
        "martes": [['12:00', '24:00']],
        "miercoles": [['12:00', '24:00']],
        "jueves": [['12:00', '24:00']],
        "viernes": [['12:00', '24:00']],
        "sábado": [['12:00', '24:00']],
        "domingo": [['12:00', '24:00']],
      }
    },
    {
      "name": "El Ñaño Bellaterra",
      "description": "Restaurante ecuatoriano. Recomiendo pedir encebollado.",
      "coordinates": [41.401333304369025, 2.1805819461590135],
      "address": "Carrer de Lepant, 203, L'Eixample, 08013 Barcelona",
      "icon": restaurantEcuIcon,
      "hours": {
        "lunes": [['12:00', '24:00']],
        "martes": [['12:00', '24:00']],
        "miercoles": [['12:00', '24:00']],
        "jueves": [['12:00', '24:00']],
        "viernes": [['12:00', '24:00']],
        "sábado": [['12:00', '24:00']],
        "domingo": [['12:00', '24:00']],
      }
    },
    {
      "name": "99 cheescake",
      "description": "Porciones de tarta de queso a 99 céntimos",
      "coordinates": [41.38769027262157, 2.160575696576618],
      "address": "Carrer d'Aribau, 42, L'Eixample, 08011 Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": null,
        "martes": [['15:00', '22:00']],
        "miercoles": [['15:00', '22:00']],
        "jueves": [['15:00', '22:00']],
        "sábado": [['12:00', '20:00']],
        "viernes": [['15:00', '22:00']],
        "domingo": [['15:00', '20:00']],
      }
    },
    {
      "name": "La Porca",
      "description": "Hamburguesería. Recomiendo la bacon cheeseburger",
      "coordinates": [41.3729767666536, 2.1707153698020174],
      "address": "Carrer de Mata, 16, Sants-Montjuïc, 08004 Barcelona",
      "icon": burguerIcon,
      "hours": {
        "lunes": [['13:00', '15:30']],
        "martes": [['13:00', '15:30']],
        "miercoles": [['13:00', '15:30']],
        "jueves": [['13:00', '15:30'], ['19:00', '23:30']],
        "sábado": [['13:00', '15:30'], ['19:00', '23:30']],
        "viernes": [['13:00', '15:30'], ['19:00', '23:30']],
        "domingo": [['13:00', '15:30'], ['19:00', '23:30']],
      }
    },
    {
      "name": "Matcha crew",
      "description": "Local especializado en Te matcha",
      "coordinates": [41.40172572849317, 2.1757448965772075],
      "address": "Carrer de València, 418, L'Eixample, 08025 Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": null,
        "martes": null,
        "miercoles": null,
        "jueves": null,
        "sábado": null,
        "viernes": null,
        "domingo": null,
      },
    },
    {
      "name": "Diagon Alley",
      "description": "Coctelería ambientada en el universo de Harry Potter",
      "coordinates": [41.402391818826004, 2.154330125412978],
      "address": "Travessia de Sant Antoni, 11, Gràcia, 08012 Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": null,
        "martes": [['18:00', '24:00']],
        "miercoles": [['18:00', '24:00']],
        "jueves": [['18:00', '24:00']],
        "sábado": [['09:00', '15:00'], ['18:00', '03:00']],
        "viernes": [['18:00', '24:00']],
        "domingo": [['09:00', '15:00']],
      }
    },

    {
      "name": "Kumove Game",
      "description": "Juego para grupos",
      "coordinates": [41.362194666313684, 2.106464796575465],
      "address": "Carrer de les Esquadres, 21, 08901 L'Hospitalet de Llobregat, Barcelona",
      "icon": shooterIcon,
      "link": "https://kumove.es/reservas/",
      "hours": {
        "lunes": null,
        "martes": [['17:00', '21:00']],
        "miercoles": [['17:00', '21:00']],
        "jueves": [['17:00', '21:00']],
        "sábado": [['11:00', '14:00'], ['17:00', '21:00']],
        "viernes": [['17:00', '21:00']],
        "domingo": [['11:00', '14:00'], ['17:00', '21:00']],
      }
    },

    {
      "name": "Penelles",
      "description": "Pueblo con muchos grafitis. En la oficina de turismo, por un euro, te dan un mapa con la ubicación de los grafitis.",
      "coordinates": [41.757217353056944, 0.9658951555346511],
      "address": "Penelles",
      "icon": walkIcon,
    },
    {
      "name": "Checkpoint Gaming Lounge",
      "description": "Hambuguesería con videojuegos. Recomiendo las patatas con shitake y los aros de cebolla",
      "coordinates": [41.391412451346135, 2.182798996576774],
      "address": "Carrer dels Almogàvers, 4, Sant Martí, 08018 Barcelona",
      "icon": shooterIcon,
      "hours": {
        "lunes": null,
        "martes": null,
        "miercoles": [['17:00', '24:00']],
        "jueves": [['17:00', '24:00']],
        "sábado": [['17:00', '24:00']],
        "viernes": [['17:00', '24:00']],
        "domingo": [['17:00', '24:00']],
      }
    },
    {
      "name": "Santuari de la Mare de Déu del Remei de Camprodon",
      "description": "",
      "coordinates": [42.29036203460985, 2.375209996618325],
      "address": "Diseminado Afuera Camprodo, 30, 17867 Camprodon, Girona",
      "icon": enduranceIcon,
    },
    {
      "name": "Takkoshu | Takko Japonés & Anime",
      "description": "El plato diferenciador son los tacos japoneses. Son interesantes para probar y estan ricos pero sin pasarse.",
      "coordinates": [41.386349387785344, 2.161393463721711],
      "address": "Carrer de la Diputació, 205, L'Eixample, 08011 Barcelona",
      "icon": restaurantJPIcon,
      "hours": {
        "lunes": [['12:00', '23:30']],
        "martes": [['12:00', '23:30']],
        "miercoles": [['12:00', '23:30']],
        "jueves": [['12:00', '23:30']],
        "sábado": [['12:00', '23:30']],
        "viernes": [['12:00', '23:30']],
        "domingo": [['12:00', '23:30']],
      }
    },
    {
      "name": "Windoor",
      "description": "Tunel de viento",
      "coordinates": [41.34875681378445, 2.0746445144668377],
      "address": "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona",
      "icon": enduranceIcon,
      "hours": {
        "lunes": [['10:00', '20:00']],
        "martes": [['10:00', '20:00']],
        "miercoles": [['10:00', '20:00']],
        "jueves": [['10:00', '20:00']],
        "domingo": [['10:00', '20:00']],
        "sábado": [['10:00', '20:00']],
        "viernes": [['10:00', '20:00']],
      }
    },

    {
      "name": "Cafetería Japonesa Kasa Hanaka",
      "description": "Mejor reservar con 3 o 4 días de antelación.",
      "coordinates": [41.401429544702275, 2.149759011305701],
      "address": "Carrer de Saragossa, 29, Sarrià-Sant Gervasi, 08006 Barcelona",
      "icon": restaurantJPIcon,
      "hours": {
        "lunes": [['09:00', '21:00']],
        "martes": [['09:00', '21:00']],
        "miercoles": [['09:00', '21:00']],
        "jueves": [['09:00', '21:00']],
        "viernes": [['09:00', '21:00']],
        "sábado": [['10:00', '18:00']],
        "domingo": [['10:00', '21:00']],
      }
    },


    {
      "name": "Orient Express Cocktail Bar - El Vagó",
      "description": "",
      "coordinates": [41.384889900623236, 2.1546208423289506],
      "address": "Carrer del Comte d'Urgell, 115, L'Eixample, 08011 Barcelona",
      "icon": cocktailIcon,
      "hours": {
        "lunes": [['18:00', '02:30']],
        "martes": [['18:00', '02:30']],
        "miercoles": [['18:00', '02:30']],
        "jueves": [['18:00', '02:30']],
        "viernes": [['18:00', '03:00']],
        "sábado": [['18:00', '03:00']],
        "domingo": [['18:00', '02:30']],
      }
    },


    {
      "name": "Bobby's free",
      "description": "Coctelería estilo barbería",
      "coordinates": [41.38983621301939, 2.170664853973704],
      "address": "Carrer de Pau Claris, 85, L'Eixample, 08010 Barcelona",
      "icon": cocktailIcon,
      "hours": {
        "lunes": [['19:00', '03:00']],
        "martes": [['19:00', '03:00']],
        "miercoles": [['19:00', '03:00']],
        "jueves": [['19:00', '03:00']],
        "viernes": [['19:15', '03:30']],
        "sábado": [['19:15', '03:30']],
        "domingo": [['19:00', '03:00']],
      }
    },

    {
      "name": "La Cachapera",
      "description": "Restaurante venezolano. Recomiendo tomar pabellón y cachaba. Los jugos son naturales.",
      "coordinates": [41.38328525157634, 2.1591165961349637],
      "address": "Carrer de Villarroel, 57, Bajos B, Eixample, 08011 Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": [["13:00", "16:30"], ["19:00", "21:00"]],
        "martes": [["13:00", "16:30"], ["19:00", "23:00"]],
        "miercoles": [["13:00", "16:30"], ["19:00", "21:00"]],
        "jueves": [["13:00", "16:30"], ["19:00", "21:00"]],
        "viernes": [["13:00", "24:00"]],
        "sábado": [["10:00", "24:00"]],
        "domingo": [["10:00", "23:00"]],
      }
    },



    {
      "name": "CocoVail Beer Hall - Craft Beer Barcelona",
      "description": "Alitas de pollo. El lunes tienen oferta de alitas de pollo a 50 céntimos.",
      "coordinates": [41.39261207383891, 2.1658602970204757],
      "address": "Carrer d'Aragó, 284, L'Eixample, 08009 Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": [["12:30", "01:00"]],
        "martes": [["12:30", "01:00"]],
        "miercoles": [["12:30", "01:00"]],
        "jueves": [["12:30", "01:00"]],
        "viernes": [["12:30", "02:00"]],
        "sábado": [["13:00", "02:00"]],
        "domingo": [["13:00", "02:00"]],
      }
    },
    {
      "name": "Boadas Cocktails",
      "description": "Alitas de pollo. El lunes tienen oferta de alitas de pollo a 50 céntimos.",
      "coordinates": [41.38466304916813, 2.17031061833657],
      "address": "Carrer dels Tallers, 1, Ciutat Vella, 08001 Barcelona",
      "icon": cocktailIcon,
      "hours": {
        "lunes": [["17:00", "01:00"]],
        "martes": [["17:00", "01:00"]],
        "miercoles": [["17:00", "01:00"]],
        "jueves": [["17:00", "01:00"]],
        "viernes": [["17:00", "01:00"]],
        "sábado": [["17:00", "01:00"]],
        "domingo": [["17:00", "01:00"]],
      }
    },

    {
      "name": "Retruc",
      "description": "Bar con billares, dardos, pimpon, futbolín...",
      "coordinates": [41.37688566723798, 2.1511004542010164],
      "address": "Gran Via de les Corts Catalanes, 399, L'Eixample, 08015 Barcelona",
      "icon": shooterIcon,
      "hours": {
        "lunes": null,
        "martes": [["17:00", "02:30"]],
        "miercoles": [["17:00", "02:30"]],
        "jueves": [["17:00", "02:30"]],
        "viernes": [["17:00", "03:00"]],
        "sábado": [["17:00", "03:00"]],
        "domingo": [["17:00", "03:00"]],
      }
    },
    {
      "name": "The Axe Club - Axe throwing en Barcelona",
      "description": "Bar con billares, dardos, pimpon, futbolín...",
      "coordinates": [41.4020441621855, 2.1836948995888585],
      "address": "Carrer de los Castillejos, 181, L'Eixample, 08013 Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": [["17:00", "21:00"]],
        "martes": [["17:00", "21:00"]],
        "miercoles": [["17:00", "21:00"]],
        "jueves": [["17:00", "21:00"]],
        "viernes": [["16:00", "14:00"]],
        "sábado": [["12:00", "22:00"]],
        "domingo": [["12:00", "21:00"]],
      },
      "link": "https://theaxeclub.es/"
    },
    {
      "name": "Axerum Vilanova - Centre d'Oci",
      "description": "Habitación en la que puedes romper cosas, tirar hachas o tiro con arte. Romper cosas cuesta 25€ por persona.",
      "coordinates": [41.23193370272922, 1.7383654970143156],
      "address": "Carrer de la Vilanoveta, 3, 08800 Vilanova i la Geltrú, Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": [["18:00", "02:00"]],
        "martes": [["18:00", "02:00"]],
        "miercoles": [["18:00", "02:00"]],
        "jueves": [["18:00", "02:00"]],
        "viernes": [["17:30", "03:00"]],
        "sábado": [["17:30", "03:00"]],
        "domingo": [["17:30", "03:00"]],
      },
      "link": "http://www.axerum.es/"
    },



    {
      "name": "El Bosc de Les Fades",
      "description": "Cockteles y comida sencilla",
      "coordinates": [41.37716247001575, 2.1773873970198996],
      "address": "Passatge de la Banca, 7, Ciutat Vella, 08002 Barcelona",
      "icon": cocktailIcon,
      "hours": {
        "lunes": [["10:30", "24:00"]],
        "martes": [["10:30", "24:00"]],
        "miercoles": [["10:30", "24:00"]],
        "jueves": [["10:30", "01:00"]],
        "viernes": [["10:30", "01:00"]],
        "sábado": [["10:30", "01:00"]],
        "domingo": [["10:30", "24:00"]],
      },
    },
    {
      "name": "PlayPoint",
      "description": "Lasertag, realidad virtual y Paintball",
      "coordinates": [41.41178171175912, 2.1733104920775594],
      "address": "Carrer de Cartagena, 331, Horta-Guinardó, 08025 Barcelona",
      "icon": restaurantIcon,
      "hours": {
        "lunes": [["16:00", "21:00"]],
        "martes": [["16:00", "21:00"]],
        "miercoles": [["16:00", "21:00"]],
        "jueves": [["16:00", "21:00"]],
        "viernes": [["16:00", "21:00"]],
        "sábado": [["10:00", "14:00"], ["16:00", "22:00"]],
        "domingo": [["10:00", "14:00"], ["16:00", "22:00"]],
      },
      "link": "http://play-point.es/"
    },


    {
      "name": "Indoor Karting Barcelona",
      "description": "Lasertag, realidad virtual y Paintball",
      "coordinates": [41.39467754625878, 2.0342753739932724],
      "address": "Pol. Ind. El Pla, Carrer de Laureà Miró, 434, 08980 Sant Feliu de Llobregat, Barcelona",
      "icon": enduranceIcon,
      "hours": {
        "lunes": [["16:00", "23:00"]],
        "martes": [["16:00", "23:00"]],
        "miercoles": [["16:00", "23:00"]],
        "jueves": [["16:00", "23:00"]],
        "viernes": [["16:00", "23:00"]],
        "sábado": [["10:00", "01:00"]],
        "domingo": [["10:00", "23:00"]],
      },
      "link": "http://www.indoorkartingbarcelona.com/"
    },


    {
      "name": "Monk Barcelona",
      "description": "Coctelería",
      "coordinates": [41.38316802140277, 2.1812649258557393],
      "address": "Carrer dels Abaixadors, 10, Ciutat Vella, 08003 Barcelona",
      "icon": cocktailIcon,
      "hours": {
        "lunes": [["18:00", "02:30"]],
        "martes": [["18:00", "02:30"]],
        "miercoles": [["18:00", "02:30"]],
        "jueves": [["18:00", "02:30"]],
        "viernes": [["18:00", "02:30"]],
        "sábado": [["17:00", "03:00"]],
        "domingo": [["17:00", "02:30"]],
      },
      "link": "http://monkbarcelona.com/"
    },

    {
      "name": "KURUMA Experience",
      "description": "Coctelería",
      "coordinates": [41.587155644444806, 2.27287683532585],
      "address": "P.I Congost, Av. de Sant Julià, 154, Nau 5, 08403 Granollers, Barcelona",
      "icon": cocktailIcon,
      "hours": {
        "lunes": null,
        "martes": null,
        "miercoles": null,
        "jueves": [["16:30", "20:00"]],
        "viernes": [["16:30", "20:00"]],
        "sábado": [["16:30", "20:00"]],
        "domingo": [["16:30", "20:00"]],
      },
      "link": "http://kurumamotorsport.com/",
      "phone": "691706107"
    },


    {
      "name": "Zona d'Escalada de la Foixarda",
      "description": "Tunel donde escalar líbremente",
      "coordinates": [41.36566545654351, 2.1458584053796623],
      "address": "Camí de la Foixarda, s/n, Sants-Montjuïc, 08038 Barcelona",
      "icon": enduranceIcon,
    },

    {
      "name": "Little Fern",
      "description": "Recomiendo pedir huevos turcos y fritters",
      "coordinates": [41.40234367129804, 2.19752629678382],
      "address": "Carrer de Pere IV, 168, Sant Martí, 08005 Barcelona",
      "icon": brunchIcon,
      "hours": {
        "lunes": [["09:00", "16:00"]],
        "martes": [["09:00", "16:00"]],
        "miercoles": [["09:00", "16:00"]],
        "jueves": [["09:00", "16:00"]],
        "viernes": [["09:00", "16:00"]],
        "sábado": [["09:00", "16:00"]],
        "domingo": [["09:00", "16:00"]],
      },
    },

    {
      "name": "Morning Glory",
      "description": "Recomiendo pedir huevos benedict",
      "coordinates": [41.37842511789779, 2.1680261949262754],
      "address": "Carrer de la Riereta, 15, Ciutat Vella, 08001 Barcelona",
      "icon": brunchIcon,
      "hours": {
        "lunes": [["09:00", "16:00"]],
        "martes": [["09:00", "16:00"]],
        "miercoles": [["09:00", "16:00"]],
        "jueves": [["09:00", "16:00"]],
        "viernes": [["09:00", "16:00"]],
        "sábado": [["09:00", "16:00"]],
        "domingo": [["09:00", "16:00"]],
      },
    },

    {
      "name": "Fast Eddie’s",
      "description": "Pedir la hamburguesa doble bacon cheeseburger",
      "coordinates": [41.3859427008839, 2.1799788134901514],
      "address": "Carrer dels Carders, 6, Ciutat Vella, 08003 Barcelona",
      "icon": burguerIcon,
      "hours": {
        "lunes": [["14:00", "23:00"]],
        "martes": [["14:00", "23:00"]],
        "miercoles": [["14:00", "23:00"]],
        "jueves": [["14:00", "23:00"]],
        "viernes": [["14:00", "23:00"]],
        "sábado": [["14:00", "23:00"]],
        "domingo": [["14:00", "23:00"]],
      },
    },

  ]
}

export default data;