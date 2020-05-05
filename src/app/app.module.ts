import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftComponent } from './Z-Share/left/left.component';
import { RightComponent } from './Z-Share/right/right.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { AppRouting } from './Z-Share/Routes/appRouting';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    ProfileComponent,
    HomeComponent,
    MessageComponent,
    NavbarComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
