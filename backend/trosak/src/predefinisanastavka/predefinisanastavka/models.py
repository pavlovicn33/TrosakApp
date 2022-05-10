from django.db import models
from backend.trosak.src.kategorija.kategorija.models import Category

class PredefinedTask(models.Model):

    name = models.CharField(max_length=200)
    category = Category
    description = models.CharField(max_length=500, default="")
    iznos = models.FloatField()
    date = models.DateField()
    izvrsena = models.BooleanField(default=False)

    def __str__(self):
        return self.name