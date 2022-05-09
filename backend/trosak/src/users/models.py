from pyclbr import Class
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from .managers import UserManager

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    budget = models.FloatField(validators=[MinValueValidator(0)], default=0.0)

    objects = UserManager()

    def __str__(self):
        return self.email