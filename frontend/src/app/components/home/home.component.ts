import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  ngAfterViewInit(): void {
    // Asegúrate de que el DOM está cargado antes de usar `M`
    if (isPlatformBrowser(this.platformId)) {
      M.AutoInit(); 
    }
  }
  ngOnInit(): void {}
}