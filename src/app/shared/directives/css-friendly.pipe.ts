import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cssFriendly'})
export class CssFriendlyPipe implements PipeTransform {

	transform(content) {
		if (content) {
			content = content.replace('.', '_');
		}
		return content;
	}
}
