import Component from '@glimmer/component';

export default class CounterComponent extends Component {
  get headLine() {
    return this.args.cardFields.Headline;
  }
  get subHeadLine() {
    return this.args.cardFields['Sub-headline'];
  }
  get imageUrl() {
    // debugger
    if (this.args.cardFields.HeaderImage === undefined) return '';
    else return this.args.cardFields.HeaderImage[0].url;
  }
}
