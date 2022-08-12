from abc import ABC, abstractmethod


class Imposto(ABC):
    @abstractmethod
    def calcular(self):
        raise NotImplementedError


class ImpostoIss(Imposto):
    def calcular(self, valor):
        return valor * 0.1


class ImpostoIcms(Imposto):
    def calcular(self, valor):
        return valor * 0.06


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ImpostoIss())}")
print(f"ICMS: {orcamento.calcular_imposto(ImpostoIcms())}")
