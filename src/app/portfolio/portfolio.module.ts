import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMeComponent} from './about-me/about-me.component';
import {ArticlesComponent} from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    ArticlesComponent,
    ContactComponent,
    EducationComponent,
    FooterComponent,
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    SkillsComponent,
    TestimonialsComponent,
    WorkExperienceComponent
  ],
  exports: [
    AboutMeComponent,
    ArticlesComponent,
    ContactComponent,
    EducationComponent,
    FooterComponent,
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    SkillsComponent,
    TestimonialsComponent,
    WorkExperienceComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
