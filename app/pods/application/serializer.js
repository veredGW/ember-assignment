import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  attrs = {
    headLine: 'headline',
    subHeadLine: 'sub_headline',
    headerImage: 'header_image'
  }

}
