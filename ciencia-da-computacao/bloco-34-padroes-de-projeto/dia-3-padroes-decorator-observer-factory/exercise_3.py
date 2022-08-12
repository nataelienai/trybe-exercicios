from abc import ABC, abstractmethod


class Sistema(ABC):
    @abstractmethod
    def __repr__(self):
        ...


class SistemaDeSuporte(Sistema):
    def __repr__(self):
        return "Sistema de Suporte"


class SistemaDeVendas(Sistema):
    def __repr__(self):
        return "Sistema de Vendas"


class SistemaFinanceiro(Sistema):
    def __repr__(self):
        return "Sistema Financeiro"


# Abstract factory
class Conta(ABC):
    def __init__(self):
        self.__sistemas = []

    @abstractmethod
    def criar(self):
        raise NotImplementedError

    def adicionar_sistema(self, sistema):
        self.__sistemas.append(sistema)


class ContaDeSuporte(Conta):
    # Factory method
    def criar_conta(self):
        self.adicionar_sistema(SistemaDeSuporte())


class ContaDeSuporteVendas(Conta):
    # Factory method
    def criar_conta(self):
        self.adicionar_sistema(SistemaDeSuporte())
        self.adicionar_sistema(SistemaDeVendas())


class ContaDeGerente(Conta):
    # Factory method
    def criar_conta(self):
        self.adicionar_sistema(SistemaDeSuporte())
        self.adicionar_sistema(SistemaDeVendas())
        self.adicionar_sistema(SistemaFinanceiro())
