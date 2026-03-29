from livereload import Server

server = Server()
# Watch your HTML, JS, and CSS files
server.watch("*.html")
server.watch("*.js")
server.watch("*.css")
# Start the server
server.serve(root=".", port=5500)
