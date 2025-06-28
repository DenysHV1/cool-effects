import cards from "./js/cards.js";
import {
  array,
  offset,
  time,
  fastOpasity,
  SCALE,
  SCALEimg,
  timeCard,
  MAX_ANGLE,
  translateIMG,
} from "./js/const.js";
import slider from "./js/slider.js";
import paginationFn from "./js/pagination.js";
slider(
  array,
  offset,
  time,
  fastOpasity,
  SCALE,
  SCALEimg,
  timeCard,
  MAX_ANGLE,
  translateIMG
);
cards(SCALE, SCALEimg, timeCard, MAX_ANGLE, translateIMG);
paginationFn(null, 1, "murkup");
