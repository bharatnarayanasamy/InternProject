
import { Injectable } from '@angular/core';


/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
  posts: any = [];

  constructor() {
    console.log('Hello PostsProvider Provider');
  }

  load(){

    this.posts = [
      {title: 'Hi 1', end: 'Bye 1'},
      {title: 'Hi 2', end: 'Bye 2'},
      {title: 'Hi 3', end: 'Bye 3'},
      {title: 'Hi 4', end: 'Bye 4'},
      {title: 'Hi 5', end: 'Bye 5'}
    ];
  }
  add(t, c){
    //let title2: any = (document.getElementbyId("thetext") as HTMLInputElement).value();
    //let content2: any = (document.getElementbyId("thtext2") as HTMLInputElement).value();


    console.log("Add button has been clicked");
    let newPosts: any = {title: t, end: c};
    this.posts.push(newPosts);
  }

  delete(key){
    console.log(key);

    var index = this.posts.indexOf(key, 0);
    if (index > -1) {
       this.posts.splice(index, 1);
    }
    console.log("Delete button has been clicked");
  }
}
