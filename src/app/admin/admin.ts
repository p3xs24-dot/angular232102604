import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Content } from "../content/content";
import { Footer } from '../footer/footer';  
import { RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-admin',
  standalone: true, 
  imports: [Header, Content, Footer, RouterModule, Sidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

} 
