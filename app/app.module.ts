//Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
//Component
import { AppComponent } from './app.component';

@NgModule({
    imports:
        [   
            CommonModule,         
            BrowserModule,
            HttpClientModule,
            BrowserAnimationsModule,
        ],
    providers:
        [
           
        ],
    declarations: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})

export class AppModule 
{
    
}
