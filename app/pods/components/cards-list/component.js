import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CardsList extends Component {
  @tracked currentPage = 1;
  MAX_CARDS_PER_PAGE = 6;
  get noPages() {
    return Math.ceil(this.args.list.length / this.MAX_CARDS_PER_PAGE);
  }
  get cardsOfPage() {
    return this.args.list.slice(
      (this.currentPage - 1) * this.MAX_CARDS_PER_PAGE,
      (this.currentPage - 1) * this.MAX_CARDS_PER_PAGE + this.MAX_CARDS_PER_PAGE
    );
  }
  @action
  incPage() {
    if (this.currentPage !== Math.ceil(this.args.list.length / this.MAX_CARDS_PER_PAGE))
      this.currentPage = this.currentPage + 1;
  }
  @action
  decPage() {
    if (this.currentPage !== 1)
      this.currentPage = this.currentPage - 1;
  }
}
