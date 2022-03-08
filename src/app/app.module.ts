import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import { MetaBuildsByRankTreeComponent } from './builder/tab-meta/components/meta-builds-by-rank-tree/meta-builds-by-rank-tree.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import { MetaTabComponent } from './builder/tab-meta/meta-tab.component';
import { BuilderTabComponent } from './builder/tab-builder/builder-tab.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import { SuitedCompInfoComponent } from "./builder/tab-builder/components/suited-composition-info/suited-comp-info.component";
import {PageComponent} from "./builder/main-page/page.component";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    MetaBuildsByRankTreeComponent,
    MetaTabComponent,
    BuilderTabComponent,
    SuitedCompInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
