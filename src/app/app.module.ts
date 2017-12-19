import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }