import { swiperConfig } from './src/ui/swiperConfig.js';
import loadCountries from './src/ui/loadCountries.js';

function initializeSite() {
  const newSwiper = new Swiper('.swiper-container', swiperConfig);
  loadCountries();
}

initializeSite();
