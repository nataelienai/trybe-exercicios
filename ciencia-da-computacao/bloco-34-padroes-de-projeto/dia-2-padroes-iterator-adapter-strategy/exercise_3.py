from exercise_2 import Baralho
from collections.abc import Iterator


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterator(self._cartas)


class BaralhoInversoIterator(Iterator):
    def __init__(self, cartas):
        self.__cartas = cartas
        self.__carta_atual = -1

    def __next__(self):
        try:
            carta = self.__cartas[self.__carta_atual]
            self.__carta_atual -= 1
            return carta
        except IndexError:
            raise StopIteration()
