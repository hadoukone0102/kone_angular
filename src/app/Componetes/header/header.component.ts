import { Component } from '@angular/core';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data_session:any

  constructor(private sesionStorageService: SessionStorageService){

  }

  ngOnInit(){
     this.data_session = this.sesionStorageService.getItem('hk');
    if(this.data_session){
      console.log(this.data_session.nom);
    }
  }

}
