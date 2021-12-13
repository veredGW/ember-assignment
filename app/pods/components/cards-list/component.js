import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CardsList extends Component {
  constructor(...args) {
    super(...args);
    //debugger
    this.currentPage = 1;
    if ((localStorage.currentPage) && (localStorage.currentPage>=1) && (localStorage.currentPage<=this.noPages))
      this.currentPage = JSON.parse(localStorage.currentPage)

  }
  @tracked currentPage ;
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
    console.log(this.currentPage);
    if (
      this.currentPage <
      Math.ceil(this.args.list.length / this.MAX_CARDS_PER_PAGE)
    ) {
      this.currentPage = this.currentPage + 1;
      localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
    }
  }
  @action
  decPage() {
    console.log(this.currentPage);
    if (this.currentPage !== 1) {
      this.currentPage = this.currentPage - 1;
      localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
    }
  }

  @action
  setCurrentPage(currentPage) {
    console.log(currentPage);
    this.currentPage = currentPage;
    localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
  }
}
