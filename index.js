import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeLouderrepeatThreeTimesEmbolden = compose(embolden, repeatThreeTimes, makeLouder);

console.log(test('hello'))
