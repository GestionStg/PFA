import { StagiaireService } from './shared/stagiaire/stagiaire.service';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [StagiaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
