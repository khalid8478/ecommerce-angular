import { ProductService } from './../../../../State/Product/product.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { filters, singleFilter } from './FilterData';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { mensPantsPage1 } from '../../../../../Data/pants/men_page1';
import { disconnect } from 'process';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']

})
export class ProductsComponent {
  filterData:any;
  singleFilterData:any;
  menpants: any;
  products:any;
  lavelThree: any;

  constructor(private router: Router,
    private activatedRoute:ActivatedRoute,
    private productService: ProductService,
    private store:Store<AppState>
  ){

  }

  ngOnInit(){
    this.filterData=filters;
    this.singleFilterData=singleFilter;
    this.menpants=mensPantsPage1;

    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        this.lavelThree= params.get("lavelThree")
        var reqData={
          category: params.get('lavelThree'),
          colores:[],
          sizes:[],
          minPrice:0,
          maxPrice: 10000,
          minDiscount:0,
          pageNumber:1,
          pageSize:10,
          stock:null
        };

      
        this.productService.findProductsByCategory(reqData);
      });
      this.activatedRoute.queryParams.subscribe(
        (params)=>{
          const color=params["color"]
          const size = params['size']
          const price = params['price']
          const discount = params['discount']
          const stock = params['stock']
          const sort = params['sort']
          const pageNumber = params['pageNumber']
          const minPrice = price?.split("-")[0];
          const maxPrice = price?.split("-")[1];

          var reqData={
          category: this.lavelThree,
          colores:color?[color].join(","):[],
          sizes:size,
          minPrice:minPrice?minPrice:0,
          maxPrice:maxPrice?maxPrice:1000000,
          minDiscount: discount?discount:0,
          pageNumber: pageNumber?pageNumber:0,
          pageSize:10,
          stock:null,
          sort:sort?sort:"price_low"
        };
        this.productService.findProductsByCategory(reqData);

        }
      )

      this.store.pipe(select(store=>store.product)).subscribe((product)=>
       {
         this.products=product?.products?.content;
         console.log("store data ", product.products.content)
       });
  }

  handleMutipleSelectFilter(value:string, sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams};

    // console.log("Query Perams",queryParams)
    const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[];
    const valueIndex= filterValues.indexOf(value);

    if(valueIndex!= -1) {
      filterValues.splice(valueIndex,1)
    }else{
      filterValues.push(value);
    }

    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(",")

    } else{
      delete queryParams[sectionId];
    }
    this.router.navigate([],{queryParams})
  }

  handleSingleSelectFilter(value:string, sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId]=value;

    this.router.navigate([],{queryParams})

    console.log(queryParams)
  }

  


  
  

}
