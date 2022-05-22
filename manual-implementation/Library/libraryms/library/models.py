from django.db import models


# Create your models here.
class Publication(models.Model):
    sci_paper_id = models.CharField(max_length=300, blank=False, db_column='sciPaperId')
    title = models.CharField(max_length=20, blank=False)
    author = models.CharField(max_length=20, blank=False)

    @classmethod
    def list_publications(cls):
        return cls.objects.all()

    @classmethod
    def create(cls, data):
        print(data)
        cls.objects.create(sci_paper_id=data['sciPaperId'], title=data['title'], author=data['author'])

