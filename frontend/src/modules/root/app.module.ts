import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: [],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
