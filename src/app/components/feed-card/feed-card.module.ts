import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [FeedCardComponent],
	declarations: [FeedCardComponent]
})
export class FeedCardModule { }
