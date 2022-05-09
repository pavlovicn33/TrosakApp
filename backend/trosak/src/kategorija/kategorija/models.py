from django.db import models
import uuid

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, default="")

    USERNAME_FIELD = "name"
    REQUIRED_FIELDS = []


    def __str__(self):
        return self.name