import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriaPesquisaComponent, NgbdSortableHeader} from './categoria-pesquisa/categoria-pesquisa.component';
import {CategoriaRoutingModule} from './categoria-routing.module';
import {CategoriaService} from './categoria.service';


@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  declarations: [
    CategoriaPesquisaComponent,
    NgbdSortableHeader
  ],
  exports: [],
  providers: [
    CategoriaService
  ],

})
export class CategoriaModule {
}
