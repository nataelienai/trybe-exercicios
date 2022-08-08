from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @abstractmethod
    def log(self, evento):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    def log(self, evento):
        with open("logs.txt", "a") as arquivoDeLogs:
            print(evento, file=arquivoDeLogs)


class LogEmTela(ManipuladorDeLog):
    def log(self, evento):
        print(evento)


class Log:
    def __init__(self):
        self.__manipuladores: list[ManipuladorDeLog] = [
            LogEmArquivo(),
            LogEmTela(),
        ]

    def adicionar_manipulador(self, manipulador: ManipuladorDeLog):
        self.__manipuladores.append(manipulador)

    def info(self, evento):
        self.__log("INFO", evento)

    def alerta(self, evento):
        self.__log("ALERTA", evento)

    def erro(self, evento):
        self.__log("ERRO", evento)

    def debug(self, evento):
        self.__log("DEBUG", evento)

    def __log(self, nivel_severidade, evento):
        log_formatado = self.__formatar(
            nivel_severidade,
            datetime.now().strftime("%m/%d/%Y %H:%M:%S"),
            evento,
        )
        for manipulador in self.__manipuladores:
            manipulador.log(log_formatado)

    def __formatar(self, nivel_severidade, data_hora, evento):
        return f"[{nivel_severidade} - {data_hora}]: {evento}"
