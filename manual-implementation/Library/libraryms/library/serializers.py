from rest_framework import serializers
from .models import Publication


class PublicationSerializer(serializers.ModelSerializer):
    sciPaperId = serializers.CharField(source='sci_paper_id')

    class Meta:
        model = Publication
        fields = ['sciPaperId', 'title', 'author']
