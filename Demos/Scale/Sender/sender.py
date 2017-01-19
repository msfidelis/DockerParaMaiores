#!/usr/bin/env python
import pika
import time
from random import choice
from string import ascii_uppercase

def randomWord():
        return ''.join(choice(ascii_uppercase) for i in range(12))

while True:
        try:
                credentials = pika.PlainCredentials('rabbitmq', 'rabbitmq')
                connection = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq', 5672, '/', credentials))
                message = randomWord()

                content = '{"to": "msfidelis01@gmail.com", "message": "%s"}' % message

                channel = connection.channel()
                channel.queue_declare(queue='hello')
                channel.basic_publish(exchange='',
                        routing_key='hello',
                        body=content)
                print(" [x] Enviada a mensagem %s ") % content
                connection.close()
                time.sleep(0.5)

        except Exception as e:
                print e
                pass
