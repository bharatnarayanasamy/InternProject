import { Injectable } from '@angular/core';

/*
  Generated class for the JoshPostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JoshPostsProvider {

  posts: any = [];

  constructor() {
    console.log('Hello JoshPostsProvider Provider');
  }

  load(){
    this.posts = [
      {title: "Such a cool guy",
        content: "This a page dedicated to how cool Josh is."},
      {title: "Anoter Post",
        content: "Just another post."}
    ];
  }

  add(){
    console.log("Add button clicked");
  }

  delete(){
    console.log("Delete button clicked");
  }

}
