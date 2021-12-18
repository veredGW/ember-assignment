import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ArticlePageComponent extends Component {
  @service store;
  get headLine() {
    // console.log('cardFields:', this.args.cardFields);

    // console.log('HeadLine:', this.args.cardFields.Headline);
    // debugger;
    console.log(this.args.cardFields);
    return this.args.cardFields.headLine;
  }

  get subHeadLine() {
    return this.args.cardFields.subHeadLine;
  }
  get imageUrl() {
    //debugger
    if (this.args.cardFields.headerImage === null) return '';
    // else return this.args.cardFields.HeaderImage[0].url;
    else return this.args.cardFields.headerImage;
  }

  @action
  postArticle(){

    console.log('post')
    let post = this.store.createRecord('article', {
      headLine: 'Rails is Omakase2',
      subHeadLine: 'Lorem ipsum2',
      headerImage: ''
    });


    function transitionToPost(post) {
      debugger
    }

    function failure(reason) {
      debugger
      // handle the error
    }

    debugger
    post
      .save()
      .then(transitionToPost)
      .catch(failure);


  }
}

