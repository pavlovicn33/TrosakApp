
from backend.trosak.src.category import models

class CategoryManager(models.Manager):
    def create_category(self, name):
        category = self.create(name=name)
        # do something with the book
        return category