#!/usr/bin/env python
# Esse script terá o papel de consumir recursos do RabbitMQß

import json, pika, time
import smtplib as s
from email.mime.text import MIMEText
from email.MIMEMultipart import MIMEMultipart
from amqpstorm import Connection

email_user = ""
email_pass = ""
email_smtp = "smtp.gmail.com"

#Retorna uma conexão com o servidor SMTPß
def getsmtpconnection():
    conn = s.SMTP(email_smtp, 587)
    conn.starttls()
    conn.ehlo
    conn.login(email_user, email_pass)

    return conn

#Envia o email com o corpo do conteudo
def sendemail(content):sdas
    print "Enviando e-mail para: %r" % content
    body = json.loads(content)
    conn = getsmtpconnection()

    FROM = email_user
    TO = body['to']
    SUBJECT = body['message']
    CONTENT = body['message']

    message = MIMEMultipart()
    message['From'] = FROM
    message['To'] = TO
    message['Subject'] = SUBJECT
    message.attach(MIMEText(body['message'], 'plain'))
    email = message.as_string()

    return conn.sendmail(FROM, TO, email)

while True:
    time.sleep(3)
    try:
        while True:
            connection = Connection('rabbitmq', 'rabbitmq', 'rabbitmq')
            channel = connection.channel()
            channel.queue.declare('hello')
            result = channel.basic.get(queue='hello', no_ack=True)
            if not result:
                print("Channel Empty.")
                break
            print("Message:", result['body'])
            channel.basic.ack(result['method']['delivery_tag'])
            channel.confirm_delivery(nowait=True)
        channel.close()
        connection.close()
    except Exception as e:
        pass
