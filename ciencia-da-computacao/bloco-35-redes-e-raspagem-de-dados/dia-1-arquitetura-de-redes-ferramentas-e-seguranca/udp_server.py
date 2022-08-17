from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, client\n")
        receivedBytes = self.rfile.readline()
        receivedData = receivedBytes.strip().decode("UTF-8")
        self.wfile.write(receivedBytes)
        print(receivedData)


server_address = ("localhost", 8084)
with UDPServer(server_address, UDPHandler) as server:
    server.serve_forever()
