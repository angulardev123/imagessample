import { Component, ViewContainerRef, ViewChild, ElementRef, NgZone, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component
    ({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })

export class AppComponent
{
    constructor() 
    {
        
    }   
}