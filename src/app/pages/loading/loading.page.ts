import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading('Hola Mundo Cargando');
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      // cssClass: 'my-custom-class',
      message: 'Cargando...',
      // duration: 2000
    });
    await this.loading.present();

    // const { role, data } = await this.loading.onDidDismiss();
    await this.loading.onDidDismiss();
    console.log('Cargando dismissed!');
  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}
