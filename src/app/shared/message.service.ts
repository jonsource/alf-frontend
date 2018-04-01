
export enum MessageState {
	NEGATIVE,
	POSITIVE,
	INFO,
	WARNING,
}

export interface Message {
	state: MessageState;
	header: string;
	description?: string;
}

export class MessageService {
	messages: Message[] = [];

	getMessages(): Message[] {
		return this.messages;
	}

	setMessage(message: Message) {
		this.messages.push(message);
	}

	removeMessage(message: Message) {
		delete this.messages[this.messages.indexOf(message)];
	}

}
