import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from 'src/environments/environment';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { AuthService } from './services/auth/auth.service';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    GoogleTagManagerModule.forRoot({
      id: environment.GTM_ID,
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    AuthService,
    AuthGuard,
    AngularFirestoreModule,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
