import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { PaisService } from './services/pais-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    HttpClient
  ],
  providers:[
    PaisService,
    HttpClient
  ]
})
export class PaisModule { }
