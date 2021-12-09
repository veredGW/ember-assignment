import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {
    // debugger;
    let response = await fetch(
      'http://localhost:3000/articles',
    );
    let data = await response.json();
    return data;

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

