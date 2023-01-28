from django.apps import AppConfig


class Eth2WebConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'eth2web'

    def ready(self):
        import eth2web.signals