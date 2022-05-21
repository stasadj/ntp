from django.db import models

from .utils import is_author_logged_in, publish_paper


# Create your models here.
class SciPaper(models.Model):
    title = models.CharField(max_length=20, blank=False)
    author = models.CharField(max_length=20, blank=False)
    published = models.BooleanField()

    @classmethod
    def list_sci_papers(cls, author):
        if is_author_logged_in(author):
            queryset = cls.objects.all()
            return queryset.filter(author=author)
        raise Exception('Usre is not logged in.')

    @classmethod
    def publish(cls, sci_paper_id):
        queryset = cls.objects.all()
        sci_paper = queryset.get(id=sci_paper_id)
        if is_author_logged_in(sci_paper.author):
            sci_paper.published = True
            #publish_paper(sci_paper.id, sci_paper.title, sci_paper.author)
            sci_paper.save()
            return sci_paper
        raise Exception('Usre is not logged in.')


class Section(models.Model):
    name = models.CharField(max_length=20, blank=False)
    content = models.CharField(max_length=10000, blank=False)
    sci_paper = models.ForeignKey(SciPaper, on_delete=models.CASCADE, related_name='sections')
