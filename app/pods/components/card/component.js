import Component from '@glimmer/component';

export default class CardComponent extends Component {
  get headLine() {
    // console.log('cardFields:', this.args.cardFields);
    // debugger
    // console.log('HeadLine:', this.args.cardFields.Headline);
    // debugger;
    return this.args.cardFields.headLine;
  }
  get subHeadLine() {
    // debugger
    return this.args.cardFields.subHeadLine;
  }
  get imageUrl() {
    //debugger
    if (this.args.cardFields.headerImage === undefined) return '';
    // else return this.args.cardFields.HeaderImage[0].url;
    // from yaml the attribute is simpler
    else return this.args.cardFields.headerImage;
  }
  get cardId() {
    console.log(this.args.id);
    return this.args.id;
  }
}
