class Log:
    def dispara_log(self, message):
        return message


class LogError:
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message):
        return "\033[91mError:\033[0m " + self.__log.dispara_log(message)


class LogWarning:
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message):
        return "\033[93mWarning:\033[0m " + self.__log.dispara_log(message)


class LogSuccess:
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message):
        return "\033[92mSuccess:\033[0m " + self.__log.dispara_log(message)


if __name__ == "__main__":
    print(LogSuccess(Log()).dispara_log("Deu green"))
    print(LogWarning(Log()).dispara_log("Deu marromeno"))
    print(LogError(Log()).dispara_log("Deu ruimm!"))
