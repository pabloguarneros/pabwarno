import http.server
import os
import urllib
from PIL import Image

def create_low_res_images(src_dir, dest_dir, size=(400, 400)):
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
    for filename in os.listdir(src_dir):
        src_path = os.path.join(src_dir, filename)
        dest_path = os.path.join(dest_dir, filename)
        if os.path.isfile(src_path) and filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            try:
                with Image.open(src_path) as img:
                    img.thumbnail(size)
                    img.save(dest_path)
            except Exception as e:
                print(f"Failed to process {filename}: {e}")

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        urlparts = urllib.parse.urlparse(self.path)
        request_file_path = urlparts.path.strip("/")
        if not os.path.exists(os.path.join(self.directory, request_file_path)):
            self.path = 'index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
    port = 9000
    workspace_dir = os.path.dirname(os.path.abspath(__file__))
    dist_dir = os.path.join(workspace_dir, "dist")
    photos_dir = os.path.join(dist_dir, "media", "photos")
    photos_low_res_dir = os.path.join(dist_dir, "media", "photos_low_res")

    # Create low-res images before starting server
    create_low_res_images(photos_dir, photos_low_res_dir)

    os.chdir(dist_dir)
    server_address = ('', port)
    try:
        httpd = http.server.ThreadingHTTPServer(server_address, MyHTTPRequestHandler)
        print(f"Serving HTTP on port {port} (http://localhost:{port}/) ...")
        httpd.serve_forever()
    except OSError as e:
        print(f"Error: {e}")
        print(f"Port {port} may already be in use.")
