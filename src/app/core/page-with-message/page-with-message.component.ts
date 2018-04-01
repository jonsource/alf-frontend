import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-page-with-message',
	templateUrl: './page-with-message.component.html',

})
export class PageWithMessageComponent implements OnInit {
	message: string;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.message = this.route.snapshot.data[0]['message'];
	}

}
