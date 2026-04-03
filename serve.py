"""
Local development server using livereload.
"""
from livereload import Server  # type: ignore

server = Server()
# Watch your HTML, JS, and CSS files
server.watch("*.html")
server.watch("*.js")
server.watch("*.css")
# Start the server
server.serve(root=".", port=5500)
