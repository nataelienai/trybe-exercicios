from abc import ABC, abstractmethod


class ImageInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(ImageInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class SvgImageAdapter(ImageInterface):
    def __init__(self, svg_image):
        self.__svg_image = svg_image

    def draw(self):
        print(f"Drawing {self.__svg_image.get_image()}")
