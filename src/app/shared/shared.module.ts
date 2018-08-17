import { PaginationComponent } from './pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule, DataTableModule, GrowlModule } from 'primeng/primeng';

import { DecimalDirective } from './directives/decimal.directive';
import { CurrencyPipePipe } from './directives/currency-pipe.pipe';

import { AuthGuard } from './guard/auth.guard';
import { HighlightDirective } from './directives/highlight.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorAutorizationService } from './interceptor-autorization.service';
import {TableModule} from 'primeng/table';



@NgModule({
  imports: [
    
    CommonModule,
    GrowlModule,
    DataTableModule,
    CommonModule,
    BlockUIModule,
    TableModule
   
  ],
  declarations: [ PaginationComponent, DecimalDirective, CurrencyPipePipe,HighlightDirective],
  providers: [AuthGuard,CurrencyPipePipe
     ,
     {
       provide : HTTP_INTERCEPTORS,
       useClass : InterceptorAutorizationService,
       multi : true
     }
 
  ],
  exports:[PaginationComponent,HighlightDirective, CurrencyPipePipe,DecimalDirective]

})
export class SharedModule { }
