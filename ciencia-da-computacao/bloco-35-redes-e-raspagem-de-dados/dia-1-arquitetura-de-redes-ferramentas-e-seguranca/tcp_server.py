from socketserver import StreamRequestHandler, TCPServer


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, client\n")
        receivedBytes = self.rfile.readline()
        receivedData = receivedBytes.strip().decode("UTF-8")
        self.wfile.write(receivedBytes)
        print(receivedData)


server_address = ("localhost", 8085)
with TCPServer(server_address, TCPHandler) as server:
    server.serve_forever()
