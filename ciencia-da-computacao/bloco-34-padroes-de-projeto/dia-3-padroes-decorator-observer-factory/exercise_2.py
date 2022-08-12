from abc import ABC, abstractmethod


class Rotina(ABC):
    @abstractmethod
    def acionar(self):
        raise NotImplementedError


# Observer
class AcenderLuzes(Rotina):
    def __init__(self, alarme):
        alarme.adicionar_rotina(self)

    def acionar(self):
        print("Acendendo luzes...")


# Observer
class PrepararCafe(Rotina):
    def __init__(self, alarme):
        alarme.adicionar_rotina(self)

    def acionar(self):
        print("Preparando café...")


# Observer
class LigarComputador(Rotina):
    def __init__(self, alarme):
        alarme.adicionar_rotina(self)

    def acionar(self):
        print("Ligando o computador...")


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotina(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Alarme despertando!!!")
        self.acionar_rotinas()


if __name__ == "__main__":
    meuAlarme = Alarme()
    AcenderLuzes(meuAlarme)
    PrepararCafe(meuAlarme)
    LigarComputador(meuAlarme)

    meuAlarme.despertar()
