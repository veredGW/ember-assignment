import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ArticlePageComponent extends Component {
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
    if (this.args.cardFields.headerImage === undefined) return '';
    // else return this.args.cardFields.HeaderImage[0].url;
    else return this.args.cardFields.headerImage;
  }

  @action
  postArticle(){

    console.log('post')

  }
}

