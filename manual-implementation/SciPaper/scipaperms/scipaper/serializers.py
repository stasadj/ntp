from rest_framework import serializers
from .models import SciPaper, Section


class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = ['name', 'content']


class SciPaperSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True)

    class Meta:
        model = SciPaper
        fields = ['id', 'title', 'author', 'sections', 'published']

    def create(self, validated_data):
        section_validated_data = validated_data.pop('sections')
        sci_paper = SciPaper.objects.create(**validated_data)
        sections_serializer = self.fields['sections']
        for each in section_validated_data:
            each['sci_paper'] = sci_paper
        sections_serializer.create(section_validated_data)
        return sci_paper

