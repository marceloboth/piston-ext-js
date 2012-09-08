from piston.handler import BaseHandler
from core.models import Grupo, Usuario

class GrupoHandler(BaseHandler):
	"""
	
	"""
	allowed_methods = ('GET',)
	model = Grupo

	def read(self, request):
		return Grupo.objects.all()

class UsuarioHandler(BaseHandler):
	"""
	
	"""
	allowed_methods = ('GET',)
	model = Usuario

	def read(self, request):
		return Usuario.objects.all()