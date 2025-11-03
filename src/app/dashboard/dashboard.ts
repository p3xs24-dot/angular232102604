import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";
import { Header } from '../header/header';

@Component({
  selector: 'app-dashboard',
  imports: [Header, RouterModule, Sidebar, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
