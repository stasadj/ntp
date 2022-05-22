from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Publication
from .serializers import PublicationSerializer


# Create your views here.
@api_view(http_method_names=['GET'])
def list_publications(request):
    return Response(PublicationSerializer(Publication.list_publications(), many=True).data)
