import readlineSync from 'readline-sync';
import { Month } from './exercise2';
import { Season } from './exercise3';

const monthSeason: any = {
  NORTH: {
    [Month.JANUARY]: Season.WINTER,
    [Month.FEBRUARY]: Season.WINTER,
    [Month.MARCH]: [Season.WINTER, Season.SPRING],
    [Month.APRIL]: Season.SPRING,
    [Month.MAY]: Season.SPRING,
    [Month.JUNE]: [Season.SPRING, Season.SUMMER],
    [Month.JULY]: Season.SUMMER,
    [Month.AUGUST]: Season.SUMMER,
    [Month.SEPTEMBER]: [Season.SUMMER, Season.AUTUMN],
    [Month.OCTOBER]: Season.AUTUMN,
    [Month.NOVEMBER]: Season.AUTUMN,
    [Month.DECEMBER]: [Season.AUTUMN, Season.WINTER],
  },
  SOUTH: {
    [Month.JANUARY]: Season.SUMMER,
    [Month.FEBRUARY]: Season.SUMMER,
    [Month.MARCH]: [Season.SUMMER, Season.AUTUMN],
    [Month.APRIL]: Season.AUTUMN,
    [Month.MAY]: Season.AUTUMN,
    [Month.JUNE]: [Season.AUTUMN, Season.WINTER],
    [Month.JULY]: Season.WINTER,
    [Month.AUGUST]: Season.WINTER,
    [Month.SEPTEMBER]: [Season.WINTER, Season.SPRING],
    [Month.OCTOBER]: Season.SPRING,
    [Month.NOVEMBER]: Season.SPRING,
    [Month.DECEMBER]: [Season.SPRING, Season.SUMMER],
  }
};

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const hemisphere = readlineSync.question('Hemisphere: ', {
  limit: Object.keys(monthSeason)
}).toUpperCase();

const month = readlineSync.question('Month: ', {
  limit: Object.keys(Month)
}).toLowerCase();

console.log(monthSeason[hemisphere][capitalize(month)]);
