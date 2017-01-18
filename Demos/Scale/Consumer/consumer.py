#!/usr/bin/env python
import json
from collections import namedtuple
from email.mime.text import MIMEText
from email.MIMEMultipart import MIMEMultipart
import smtplib as s
import pika
import time

email_user = "@gmail.com"
email_pass = ""

def getsmtpconnection():
    conn = s.SMTP('smtp.gmail.com', 587)
    conn.starttls()
    conn.ehlo
    conn.login(email_user, email_pass)

    return conn

def sendemail(body):

    conn = getsmtpconnection()

    FROM = email_user
    TO = body.to
    SUBJECT = body.message
    CONTENT = body.message

    message = MIMEMultipart()
    message['From'] = FROM
    message['To'] = TO
    message['Subject'] = SUBJECT
    message.attach(MIMEText(text, 'plain'))
    email = message.as_string()

    return conn.sendmail(FROM, TO, email)


def parsejson(data):
    return json.loads(data, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))

def callback(ch, method, properties, body):
    print " [x] Enviando %r" % (body)
    sendemail(parsejson(body))

    ch.basic_ack(delivery_tag = method.delivery_tag)

while True:
    try:
        credentials = pika.PlainCredentials('rabbitmq', 'rabbitmq')
        connection = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq', 5672, '/', credentials))
        channel = connection.channel()

        channel.queue_declare(queue='hello')



        channel.basic_consume(callback,
                              queue='hello',
                              no_ack=True)

        channel.start_consuming()
    except Exception as e:
        pass
