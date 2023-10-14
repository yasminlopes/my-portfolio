import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NgbNavItem, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    BannerSectionComponent,
    AboutMeComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    TranslateModule,
    NgbNavModule
  ],
  providers: [
    NgbNavItem 
  ]
})
export class HomeModule { }
