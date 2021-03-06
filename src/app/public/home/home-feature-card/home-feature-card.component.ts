import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feature-card',
  templateUrl: './home-feature-card.component.html',
  styles: [
  ]
})
export class HomeFeatureCardComponent implements OnInit {

  // @Input() : permet a un composant fils de recuperer des
  // donnees de son composant parent (=> home-features)
  // Elles devront être injectées par le composant parent.
  @Input() description !: string;
  @Input() icon!: string;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
