import Application from 'ember-vr-shopping/app';
import config from 'ember-vr-shopping/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
