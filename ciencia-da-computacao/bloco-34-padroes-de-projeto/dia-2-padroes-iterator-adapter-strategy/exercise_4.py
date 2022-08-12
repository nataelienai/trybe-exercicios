from collections.abc import Iterable, Iterator
from exercise_2 import Carta


class EstrategiaDeIteracao:
    def __init__(self):
        self.__indice_atual = 0

    def iterar(self):
        indice = self.__indice_atual
        self.__indice_atual += 1
        return indice


class EstrategiaDeIteracaoInversa:
    def __init__(self):
        self.__indice_atual = -1

    def iterar(self):
        indice = self.__indice_atual
        self.__indice_atual -= 1
        return indice


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia_de_iteracao):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.__estrategia_de_iteracao = estrategia_de_iteracao

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self.__estrategia_de_iteracao)


class BaralhoIterator(Iterator):
    def __init__(self, cartas, estrategia_de_iteracao):
        self.__cartas = cartas
        self.__estrategia_de_iteracao = estrategia_de_iteracao

    def __next__(self):
        try:
            carta = self.__cartas[self.__estrategia_de_iteracao.iterar()]
            return carta
        except IndexError:
            raise StopIteration()


if __name__ == "__main__":
    print("===== Baralho Padrão =====")
    for carta in Baralho(EstrategiaDeIteracao()):
        print(carta)

    print("\n\n===== Baralho Inverso =====")
    for carta in Baralho(EstrategiaDeIteracaoInversa()):
        print(carta)
