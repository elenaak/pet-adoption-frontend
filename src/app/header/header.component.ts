import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { CurrentUser } from 'src/model/CurrentUser';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
