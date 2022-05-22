from django.core.management import BaseCommand
from libraryms.library.models import Publication
import redis
import json


class Command(BaseCommand):
    def handle(self, *args, **options):

        r = redis.StrictRedis(host='localhost', port=6379, db=1)
        p = r.pubsub()
        p.psubscribe('scipaper.publish')
        print('Running...')
        for message in p.listen():
            if message:
                data = message.get('data', '')
                if not isinstance(data, int):
                    Publication.create(json.loads(data.decode('UTF-8')))
