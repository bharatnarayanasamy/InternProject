import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
  posts: any = [];

  constructor(public http: HttpClient) {
    console.log('Hello PostsProvider Provider');
  }

  load(){

    this.posts = [
      {title: 'Hi 1', summary: '1', end: 'Bye 1'},
      {title: 'Hi 2', summary: '2', end: 'Bye 2'},
      {title: 'Hi 3', summary: '3', end: 'Bye 3'},
      {title: 'Hi 4', summary: '4', end: 'Bye 4'},
      {title: 'Hi 5', summary: '5', end: 'Bye 5'}
    ];
  }
}
