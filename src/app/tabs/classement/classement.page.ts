import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/services/api.service";
import {ConstructorStanding, DriverStanding} from "../../api/data/Standing";
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-classement',
  templateUrl: './classement.page.html',
  styleUrls: ['./classement.page.scss'],
})
export class ClassementPage implements OnInit {
  driverStanding: DriverStanding [];            //tableau contenant le classement pilote de la saison choisie
  constructorStanding: ConstructorStanding [];  //tableau contenant le classement constructeur de la saison choisie

  segment = 0;    //numero de l'onglet (Pilato/Constructeur) sélectionné
  selectedSlide: IonSlides;   //page (Pilato/Constructeur) affichée

  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  }

  constructor(private api: ApiService) {}

  async ngOnInit(){
    this.driverStanding = await this.api.getDriverStanding(2022);             //récupérer le classement pilote de la dernière saison
    this.constructorStanding = await this.api.getConstructorStanding(2022);   //récupérer le classement constructeur de la dernière saison
  }

  //change le slide affiché quand on clique sur une catégorie
  async segmentChanged(){
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
