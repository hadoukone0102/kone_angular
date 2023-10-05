import { Component } from '@angular/core';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Datas:any

  constructor(private sessionStorageService: SessionStorageService){}

  ngOnInit(){
      const Datas = this.sessionStorageService.getItem('hk');
      if (Datas) {
        console.log(Datas)
      }else{
        console.log("n'y pense meme pas il y-a rien ici");
      }
  }
  
}
