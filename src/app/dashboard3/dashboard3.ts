import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard3',
  imports: [Header, Sidebar, RouterModule, Footer],
  templateUrl: './dashboard3.html',
  styleUrls: ['./dashboard3.css']
})
export class Dashboard3 {

}
