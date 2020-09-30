import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alerta',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Botones',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Cartas',
      redirectTo: '/cart'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Chequeo',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Calendario',
      redirectTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grilla',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Scroll Infinito',
      redirectTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Ingreso de Datos',
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'Listas',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'Lista Reordenada',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Cargando',
      redirectTo: '/loading'
    }



  ];

  constructor() { }

  ngOnInit() {
  }

}
