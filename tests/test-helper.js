import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { Promise as EmberPromise } from 'rsvp';

if (typeof Promise === 'undefined') {
  window.Promise = EmberPromise;
}

setApplication(Application.create(config.APP));
start();
