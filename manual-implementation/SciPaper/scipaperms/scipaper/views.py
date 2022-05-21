from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView
from .models import SciPaper
from .serializers import SciPaperSerializer
from .utils import is_author_logged_in


# Create your views here.
class SciPaperRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = SciPaper.objects.all()
    serializer_class = SciPaperSerializer


class SciPaperCreateAPIView(CreateAPIView):
    queryset = SciPaper.objects.all()
    serializer_class = SciPaperSerializer

    def create(self, request, *args, **kwargs):
        if is_author_logged_in(request.data['author']):
            return super().create(request, *args, **kwargs)
        raise Exception('Usre is not logged in.')


@api_view(http_method_names=['GET'])
def list_sci_papers(request, author):
    return Response(SciPaperSerializer(SciPaper.list_sci_papers(author), many=True).data)


@api_view(http_method_names=['GET'])
def publish(request, sci_paper_id):
    return Response(SciPaperSerializer(SciPaper.publish(sci_paper_id)).data)
