import {Component, Input} from '@angular/core';
import {Message, MessageState} from '../message.service';


@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
})

export class MessageComponent {
	@Input() message: Message;

	getMessageState(): string {
		switch (this.message.state) {
			case MessageState.NEGATIVE: {
				return 'ui negative message';
			}
			case MessageState.POSITIVE: {
				return 'ui positive message';
			}
			case MessageState.INFO: {
				return 'ui info message';
			}
			case MessageState.WARNING: {
				return 'ui warning message';
			}
			default: {
				return 'ui message';
			}

		}
	}
}
