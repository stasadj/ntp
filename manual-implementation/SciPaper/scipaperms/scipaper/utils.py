import py_eureka_client.eureka_client as eureka_client

import json
import redis

redis_client = redis.StrictRedis(host='localhost', port=6379, db=1)


def is_author_logged_in(author):
    try:
        res = eureka_client.do_service('User', '/isloggedin/' + author)
        return True if res == 'true' else False
    except Exception:
        return False


def get_name(author):
    try:
        res = eureka_client.do_service('User', '/getname/' + author)
        return res
    except Exception:
        return ''


def publish_paper(sci_paper_id, title, author):
    redis_client.publish('scipaper.publish', json.dumps({'sciPaperId': sci_paper_id, 'title': title, 'author': author}))

