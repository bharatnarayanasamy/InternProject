import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { JoshPostsProvider } from '../../providers/josh-posts/josh-posts';

/**
 * Generated class for the JoshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-josh',
  templateUrl: 'josh.html',
})
export class JoshPage {

  posts: any = null;

  constructor(public navCtrl: NavController, public postsProvider: JoshPostsProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoshPage');
    this.posts.load();
  }

}
