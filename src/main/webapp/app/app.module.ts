import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JustgameSharedModule } from 'app/shared/shared.module';
import { JustgameCoreModule } from 'app/core/core.module';
import { JustgameAppRoutingModule } from './app-routing.module';
import { JustgameHomeModule } from './home/home.module';
import { JustgameEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JustgameSharedModule,
    JustgameCoreModule,
    JustgameHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JustgameEntityModule,
    JustgameAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JustgameAppModule {}
