import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
/**
 * Generated class for the LearningProvidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bharat',
  templateUrl: 'bharat.html',
})
export class BharatPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public posts: PostsProvider) {
    
  }

  ionViewDidLoad() {
      this.posts.load();
  }

}
