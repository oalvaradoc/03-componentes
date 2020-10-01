import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes: any[] = [];
  textoBuscar: '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbunes().subscribe( albunes => {
      // console.log(albunes);
      this.albunes = albunes;
    });
  }

  onSearchChange(event){
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
