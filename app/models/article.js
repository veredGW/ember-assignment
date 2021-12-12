import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') headLine;
  @attr('string') subHeadLine;
  @attr('string') headerImage;
}
