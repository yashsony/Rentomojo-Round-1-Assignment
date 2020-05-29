import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';

import { ContactService } from './services/contact.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
   
    
  ],
  providers: [ContactService, ProcessHTTPMsgService,
    {provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
