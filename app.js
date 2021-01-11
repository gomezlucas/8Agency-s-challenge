import { swiperConfig } from './src/ui/swiperConfig.js';
import loadCountries from './src/ui/loadCountries.js';
import getDataFromUser from './src/ui/getDataFromUser.js';

function initializeSite() {
  const newSwiper = new Swiper('.swiper-container', swiperConfig);
  loadCountries();
  getDataFromUser();
}

initializeSite();
