import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCu8PBDsz7KrKIV1O_EYSYFgutJb7CH_qw",
      authDomain: "https://ng-recipebook-f3680.firebaseio.com"
    });
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
