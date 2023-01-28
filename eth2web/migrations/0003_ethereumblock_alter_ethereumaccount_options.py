# Generated by Django 4.1.5 on 2023-01-28 15:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('eth2web', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ethereumBlock',
            fields=[
                ('number', models.IntegerField(primary_key=True, serialize=False)),
                ('timestamp', models.DateTimeField()),
                ('hash', models.CharField(max_length=125)),
                ('hash_decimal', models.CharField(max_length=255)),
                ('wining_number', models.CharField(max_length=5)),
                ('registered', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
            ],
            options={
                'verbose_name': 'Ethereum Block',
                'verbose_name_plural': 'Ethereum Blocks',
            },
        ),
        migrations.AlterModelOptions(
            name='ethereumaccount',
            options={'verbose_name': 'Ethereum Account', 'verbose_name_plural': 'Ethereum Accounts'},
        ),
    ]
