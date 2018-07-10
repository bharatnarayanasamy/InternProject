import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningProvidersPage } from './learning-providers';

@NgModule({
  declarations: [
    LearningProvidersPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningProvidersPage),
  ],
})
export class LearningProvidersPageModule {}
