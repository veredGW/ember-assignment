import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArticlesRoute extends Route {
  @service store;
  async model(params) {
    const { article_id } = params;

    let response = await this.store.findRecord('article', article_id)
    console.log(response)
    return response
    // debugger
    // let response = await fetch('http://localhost:3000/articles/' + article_id);
    // let data = await response.json();
    // return data[0];

    // fetch from airtable
    // let response = await fetch(
    //   'https://api.airtable.com/v0/appedbrLc74Dun7pV/Content/' + article_id,
    //   {
    //     headers: {
    //       Authorization: 'Bearer key8MxwcnvllBPBro',
    //     },
    //   }
    // );
    // let data = await response.json();
    // // debugger
    // // return article_id;
    // return data.fields;
  }


}
