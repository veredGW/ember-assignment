import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  async model() {
    // debugger;
    const data = await this.store.findAll('article');
    console.log(data)
    return data
   // debugger
   //  let response = await fetch('http://localhost:3000/articles');
   //  let data = await response.json();
   //  return data;

    // fetch from airtable:
    // let response = await fetch(
    //   'https://api.airtable.com/v0/appedbrLc74Dun7pV/Content?fields=Headline&fields=HeaderImage&fields=Sub-headline',
    //   {
    //     headers: {
    //       Authorization: 'Bearer key8MxwcnvllBPBro',
    //     },
    //   }
    // );
    // let data = await response.json();
    // return data.records;
  }
}
