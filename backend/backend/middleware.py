import logging

logger = logging.getLogger('django.request')


class RequestLogger(object):
  def process_request(self, request):
    logger.info(request.body.decode('unicode_escape'))

  def process_response(self, request, response):
    logger.info(response)
    logger.info(response.content)
    return response
