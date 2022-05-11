// Exercise 1

enum Color {
  BLACK = 'preta',
  WHITE = 'branca',
  RED = 'vermelha',
  SILVER = 'prata',
}

enum Direction {
  LEFT = 'esquerda',
  RIGHT = 'direita',
}

enum Door {
  LEFT_FRONT_DOOR = 'dianteira esquerda',
  LEFT_REAR_DOOR = 'traseira esquerda',
  RIGHT_FRONT_DOOR = 'dianteira direita',
  RIGHT_REAR_DOOR = 'traseira direita',
}

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('Buzinando!');
  }

  openTheDoor(door: Door) {
    console.log(`Abrindo a porta ${door}`);
  }

  closeTheDoor(door: Door) {
    console.log(`Fechando a porta ${door}`);
  }

  turnOn() {
    console.log('Carro ligado!');
  }

  turnOff() {
    console.log('Carro desligado!');
  }

  speedUp() {
    console.log('Acelerando!');
  }

  speedDown() {
    console.log('Desacelerando!');
  }

  stop() {
    console.log('Parado!');
  }

  turn(direction: Direction) {
    console.log(`Virando à ${direction}`);
  }
}

// Exercise 2
function uberTrip() {
  const car = new Car('volkswagen gol', Color.SILVER, 4);
  car.turnOn();
  car.speedUp();
  car.speedDown();
  car.turn(Direction.LEFT);
  car.speedUp();
  car.speedDown();
  car.turn(Direction.RIGHT);
  car.speedUp();
  car.speedDown();
  car.turn(Direction.RIGHT);
  car.speedUp();
  car.speedDown();
  car.stop();
  car.speedUp();
  car.speedDown();
  car.turn(Direction.RIGHT);
  car.speedUp();
  car.speedDown();
  car.turn(Direction.LEFT);
  car.speedUp();
  car.speedDown();
  car.turn(Direction.RIGHT);
  car.speedUp();
  car.speedDown();
  car.stop();
}

uberTrip();
