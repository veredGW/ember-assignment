import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  attrs = {
    headLine: 'Headline',
    subHeadLine: 'Sub-headline',
    headerImage: 'HeaderImage'
  }

}
