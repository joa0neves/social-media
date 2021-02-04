import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule
	],
	exports: [HeaderComponent],
	declarations: [HeaderComponent]
})
export class HeaderModule { }
