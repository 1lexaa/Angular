import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarComponent } from './components/car/car.component';
import { CounterComponent } from './components/counter/counter.component';
import { MycustompipePipe } from './pipes/mycustompipe.pipe';
import { ImageComponent } from './components/image/image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCarComponent } from './components/input-car/input-car.component';
import { ZoomDirective } from './directives/zoom.directive';
import { HeaderComponent } from './components/header/header.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TestFormComponent } from './components/test-form/test-form.component';
import { MoviesComponent } from './components/movies/movies.component';
import { QuizComponent } from './components/quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CounterComponent,
    MycustompipePipe,
    ImageComponent,
    InputCarComponent,
    ZoomDirective,
    HeaderComponent,
    HooksComponent,
    TestFormComponent,
    MoviesComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
