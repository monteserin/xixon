import { bicycleIcon, enduranceIcon, kayakIcon, quadIcon, restaurantIcon, walkIcon, shooterIcon } from '../../icons';
import lloreda_nora2 from './paths/lloreda-nora2.json';
import senda_nora_desde_pilo from './paths/senda-nora-desde-molino-pilo.json';
import fuente_deva from './paths/fuente-deva.json';
import gijon_camocha from './paths/gijon-camocha.json';

const data = {
  "origin": [43.532145581240215, -5.662965391206625],
  "targets": [
    {
      "name": "<strong>Molino del Pilo</strong>",
      "description": "Cuando lleguemos a este destino estaremos a mitad de recorrido de la Senda fluvial que va desde Lloreda hasta la playa de la Ñora. A lo largo de la senda que comenzamos en ese momento habrá ocasiones en las que será necesario bajarse de la bicicleta",
      "coordinates": [43.53811, -5.58350],
      "icon": bicycleIcon,
      "path": senda_nora_desde_pilo
    },
    {
      "name": "<strong>Ruta Gijón - Camcocha</strong>",
      "description": "",
      "coordinates": [43.526159, -5.643635],
      "icon": bicycleIcon,
      "path": gijon_camocha
    },
    {
      "name": "<strong>Fuente de Deva</strong>",
      "description": "Cuando lleguemos a este destino estaremos a mitad de recorrido de la Senda fluvial que va desde Lloreda hasta la playa de la Ñora. A lo largo de la senda que comenzamos en ese momento habrá ocasiones en las que será necesario bajarse de la bicicleta",
      "coordinates": [43.527027, -5.628499],
      "icon": bicycleIcon,
      "path": fuente_deva
    },
    {
      "name": "<strong>Asturias Mount & Ride</strong>",
      "description": "55 euros medio día<br/>75 euros el día entero(de 9 a 7)<br/>80 km de autonomía en modo turbo<br/>Suelen tener 6 o más bicis para reservar<br/><br/>Web: <a href=\"https://asturebikes.com/\">asturebikes</a><br/><br/>Tel: <a href=\"tel:+34667443334\">667 44 33 34</a>",
      "coordinates": [43.54563742346293, -5.629976328835525],
      "icon": bicycleIcon,
    },
    {
      "name": "<strong>Senda Lloreda - playa de la Ñora</strong/>",
      "description": "Cuando lleguemos a este destino estaremos en el inicio de la Senda fluvial que desemboca en la playa de la Ñora. A lo largo de la senda que comenzamos en ese momento habrá ocasiones en las que será necesario bajarse de la bicicleta",
      "coordinates": [43.51886, -5.57963],
      "icon": bicycleIcon,
      "path": lloreda_nora2,
      "offset": [0, 200]
    },
    {
      "name": "<strong>Laser Tag  - Astur Láser Combat</strong>",
      "description": "Muy divertido. 2 partidas de 10 min 13€ por persona. 5 partidas, 25€ por persona.<br/><br/>Web: <a href=\"https://www.asturlasercombat.com/\">asturlasercombat</a><br/><br/>Tel: <a href=\"tel:+34689003417\">689 003 417</a>",
      "coordinates": [43.51217734075519, -5.6821707079474075],
      "icon": shooterIcon,
    },

    {
      "name": "<strong>Rutas en Buggy y Humor Amarillo</strong>",
      "description": "<strong>Humor amarillo</strong>: El perfil de la gente que va es despedidas de soltero y en general algo perjudicados. Lo pasamos bien, pero los trajes de sumo tienen sudor de muchas personas y no cierran y hay varios aspectos algo descuidados.Precio: 30€ por persona\n\n<br/><br/><strong>Rutas en Buggy</strong>: Precio: 70€ una hora de buggy o 120€ dos horas. En un buggy pueden ir 2 personas.<br/><br/>Web: <a href=\"https://www.actividadesgijon.com/\">actividadesgijon.com</a><br/><br/>Tel: <a href=\"tel:+34605304913\">605 304 913</a>",
      "coordinates": [43.499108656946476, -5.703202659870976],
      "icon": quadIcon,
      "price": "70€ una hora de buggy o 120€ dos horas. En un buggy pueden ir 2 personas."
    },




    {
      "name": "<strong>Descenso río Deva</strong>",
      "description": "Descenso del río Deva",
      "coordinates": [43.38139003396061, -4.50655026021243],
      "icon": kayakIcon,
      "tlf": "633310660",
      "web": "http://www.canoasriodeva.com/"
    },
    {
      "name": "<strong>Descenso río Sella</strong>",
      "description": "Descenso del río Sella",
      "coordinates": [43.3510221543928, -5.131523293152725],
      "icon": kayakIcon,
      "tlf": "985947155",
      "web": "https://www.descensodelsella.es/"
    },
    {
      "name": "<strong>Vía verde San Tirso de Abres</strong>",
      // "description": "Descenso del río Sella",
      "coordinates": [43.432430509593246, -7.14368082787692],
      "icon": walkIcon,
    },
    {
      "name": "<strong>Vía verde del Tranqueru</strong>",
      // "description": "Descenso del río Sella",
      "coordinates": [43.573679313840906, -5.730416180492039],
      "icon": enduranceIcon,
    },
    {
      "name": "<strong>PanTai Beach Bar</strong>",
      // "description": "Descenso del río Sella",
      "coordinates": [43.55425592312059, -5.638074888702168],
      "icon": restaurantIcon,
    },
    {
      "name": "<strong>Shibuya Sushi Bar</strong>",
      "description": "Web: <a href=\"https://www.sibuya.es/\">shibuya.es</a></br/><br/>Tel: <a href=\"+34984105587\">984 105 587</a>",
      "coordinates": [43.54175522296213, -5.658887999999999],
      "icon": restaurantIcon,
    },
    {
      "name": "<strong>Via de la Ferrata de la Hermida</strong>",
      // "description": "Descenso del río Sella",
      "coordinates": [43.258053464548524, -4.608982201197286],
      "icon": restaurantIcon,
    },
    {
      "name": "<strong>Los Cauces Centro Multiaventura. Descenso del Sella</strong>",
      // "description": "Descenso del río Sella",
      "coordinates": [43.39072738113777, -5.175883692154669],
      "icon": enduranceIcon,
    },
    {
      "name": "<strong>Turrones Helados Federico Verdú</strong>",
      "description": "Probablemente, la mejor heladería de Gijón",
      "coordinates": [43.548282520029765, -5.663043920947057],
      "icon": restaurantIcon,
    },
    {
      "name": "<strong>Escuela de vela de luanco</strong>",
      "description": "Para hacer paddle surf",
      "coordinates": [43.621158697435014, -5.785633157042904],
      "icon": kayakIcon,
    }
  ]
}

export default data;