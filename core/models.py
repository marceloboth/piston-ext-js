from django.db import models

class Grupo(models.Model):
	nome = models.CharField(max_length = 100)	

class Usuario(models.Model):
	nome = models.CharField(max_length = 100)
	grupo = models.ForeignKey('Grupo')	