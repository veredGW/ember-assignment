import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked currentPage = 1;
  get noPages() {
    return Math.ceil(this.args.modelLength/6);
  }
  @action
  incPage() {
    if (this.currentPage !== Math.ceil(this.args.modelLength/6))
      this.currentPage = this.currentPage + 1;
  }
}
