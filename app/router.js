import EmberRouter from '@ember/routing/router';
import config from 'ember-assignment/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('articles', { path: '/articles/:article_id' });
  this.route('home', { path: '/' });
});
