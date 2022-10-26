import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { MatCheckboxChange } from '@angular/material/checkbox';
import DataSource from 'devextreme/data/data_source';

export interface IDepp {
	depp: string;
	descr: string;
	flag1: boolean;
	flag2: boolean;
	flag3: boolean;
	flag4: boolean;
	flag5: boolean;
	flag6: boolean;
	flag7: boolean;
}


@Component({
	selector: 'app-testgrid',
	templateUrl: './test.grid.component.html',
	styleUrls: ['./test.grid.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestGridComponent implements OnInit {

	constructor() {

	}

	store: IDepp[];
	@ViewChild("gridDepp", { static: false }) dxDataGrid: DxDataGridComponent

	ngOnInit() {
		this.store = new Array<IDepp>();
		for (let i = 0; i < 1300; i++)
		{
			this.store.push({
				depp: ('0000' + i.toString()).substring(-4),
				descr: 'store ' + i.toString(),
				flag1: true,
				flag2: false,
				flag3: true,
				flag4: false,
				flag5: true,
				flag6: false,
				flag7: true
			});
		}
	}

	gridDepp_change(x, field) {
		//console.log("gridDepp_change", x);
	}

	clickme(x) {
		//console.log("click me", x);
	}

	clicking($event, flag: string): void {
		this.store.forEach(ele => {
			ele[flag] = $event.value;
		});
	}
}
