import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MessageComponent } from 'src/app/message/message.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { NewPageComponent } from 'src/app/new-page/new-page.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'message', component: MessageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'new', component: NewPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]

})
export class AppRouting {

}
