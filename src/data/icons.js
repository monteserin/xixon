import Leaflet from 'leaflet';
import bicycle from './icons/cycle-lane.png';
import endurance from './icons/endurance.png';
import quad from './icons/quad.png';
import restaurant from './icons/fork.png';
import restaurantjp from './icons/restaurantjp.png';
import restaurantecu from './icons/restaurantecu.png';
import cocktail from './icons/cocktail.png';
import brunch from './icons/brunch.png';
import burguer from './icons/hamburguer.png';
import kayak from './icons/kayak.png';
import walk from './icons/walk.png';
import shooter from './icons/shooter.png';

const opts = {
  iconSize: [64, 64],
  iconAnchor: [32, 64]
}

export const bicycleIcon = Leaflet.icon({
  iconUrl: bicycle,
  ...opts
});

export const cocktailIcon = Leaflet.icon({
  iconUrl: cocktail,
  ...opts
});

export const enduranceIcon = Leaflet.icon({
  iconUrl: endurance,
  ...opts
});

export const quadIcon = Leaflet.icon({
  iconUrl: quad,
  ...opts
});

export const brunchIcon = Leaflet.icon({
  iconUrl: brunch,
  ...opts
});

export const burguerIcon = Leaflet.icon({
  iconUrl: burguer,
  ...opts
});


export const restaurantIcon = Leaflet.icon({
  iconUrl: restaurant,
  ...opts
});

export const restaurantJPIcon = Leaflet.icon({
  iconUrl: restaurantjp,
  ...opts
});

export const restaurantEcuIcon = Leaflet.icon({
  iconUrl: restaurantecu,
  ...opts
});

export const kayakIcon = Leaflet.icon({
  iconUrl: kayak,
  ...opts
});

export const walkIcon = Leaflet.icon({
  iconUrl: walk,
  ...opts
});

export const shooterIcon = Leaflet.icon({
  iconUrl: shooter,
  ...opts
});