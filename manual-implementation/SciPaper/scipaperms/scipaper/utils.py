import py_eureka_client.eureka_client as eureka_client

from kombu import Connection, Exchange
from yosun import Yosun


def is_author_logged_in(author):
    try:
        res = eureka_client.do_service('User', '/isloggedin/' + author)
        return True if res == 'true' else False
    except Exception:
        return False


def publish_paper(id, title, author):
    # Define Connection
    connection = Connection('amqp://guest:guest@localhost:5672//')

    # RabbitMQ Exchange definition
    exchange = Exchange('events', type='topic')

    # Yosun initialize
    yosun = Yosun(connection, exchange)

    yosun.publish('scipapers.publish', {'sciPaperId': id, 'title': title, author: 'author'})
