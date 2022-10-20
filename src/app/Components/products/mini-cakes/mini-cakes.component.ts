import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import DataListProducts from 'src/assets/listProducts.json';


@Component({
  selector: 'app-mini-cakes',
  templateUrl: './mini-cakes.component.html',
  styleUrls: ['./mini-cakes.component.css']
})
export class MiniCakesComponent implements OnInit {
  listProducts: any = DataListProducts;
  @ViewChild('#product') productName!: ElementRef;
  @ViewChild('#price') productPrice!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
