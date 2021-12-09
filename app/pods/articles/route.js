import Route from '@ember/routing/route';

export default class ArticlesRoute extends Route {
  async model(params) {
    const { article_id } = params;
    let response = await fetch(
      'http://localhost:3000/articles/' + article_id,
      // {
      //   headers: {
      //     Access-Control-Allow-Origin: * ,
      //   },
      // }
    );
    debugger
    let data = await response.json();
    return data[0].fields;
    // airtable
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
