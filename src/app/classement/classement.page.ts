import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {DriverStanding} from "../data/Ranking/driver-standing-search";
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-classement',
  templateUrl: './classement.page.html',
  styleUrls: ['./classement.page.scss'],
})
export class ClassementPage implements OnInit {
  driverStanding: DriverStanding [];           //tableau contenant le classement de la saison choisie
  segment = 0;
  selectedSlide: IonSlides;

  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  }

  constructor(private api: ApiService) {}

  async ngOnInit(){
    this.driverStanding = await this.api.getDriverStanding(2022); //récupérer le classement de la dernière saison
  }

  //change le slide affiché quand on clique sur une catégorie
  async segmentChanged(ev){
    await this.selectedSlide.slideTo(this.segment);
  }

  //change le bouton de catégorie lorsque la page du slide est changée
  async slideChanged(slides: IonSlides){
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    })
  }




}
