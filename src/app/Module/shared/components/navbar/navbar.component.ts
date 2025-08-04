import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from "./nav-content/nav-content.component";
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AuthComponent } from '../../../auth/auth.component';
import { UserService } from '../../../../State/User/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule, NavContentComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentSection:any
  isNavbarContentOpen:any
  userProfile:any

  constructor(private router:Router, private dialog : MatDialog, private userService:UserService, private store: Store<AppState>){

  }
  openNavbarContent(section:any){
    this.isNavbarContentOpen=true;
    this.currentSection=section;
  }

  closeNavbarContent(){
    this.isNavbarContentOpen=false;
  }

  navigateTo(path:any){

    this.router.navigate([path])

  }

  ngOnInit(){
    if(localStorage.getItem("jwt"))this.userService.getUserProfile()

      this.store.pipe(select ((store) => store.user)).subscribe((user)=>{
        this.userProfile=user.userProfile;
        if(user.userProfile) {
          this.dialog.closeAll()
        }
      })
  }
  @HostListener('document:click',['$event'])
  onDocumentClick(event:MouseEvent){
    const modalContainer= document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");

    let clickInsideButton = false;

    openButtons.forEach((button:Element)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton=true;
      }
    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }
  }

  handleOpenLoginModal=()=> {
    console.log("hangle open login module")
    this.dialog.open(AuthComponent,{
      width: "400px",
      disableClose:false
    })
  }

  handlerLogout=()=>{
    this.userService.logout()
  }

}
