import { Component} from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from 'src/app/category.service';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$: Observable<any>;
  categories$: any;
  category!: string | null;

  constructor(
    route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,) {
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    })
  }


}
