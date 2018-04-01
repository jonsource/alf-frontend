import {Injectable} from '@angular/core';
import {ResourceParams, ResourceAction} from 'ngx-resource';
import {ResourceMethod} from 'ngx-resource/src/Interfaces';
import {RequestMethod} from '@angular/http';
import {RestClientWithoutKey} from './rest-client-without-key';

interface ResetPasswordInput {
	reset_key: string;
	password: string;
}

@Injectable()
@ResourceParams({
	url: '/password_recovery'
})
export class ResetPasswordResource extends RestClientWithoutKey {
	@ResourceAction({
		method: RequestMethod.Post,
		path: '/send_email'
	})
	post: ResourceMethod<{email: string}, {message: string}>;

	@ResourceAction({
		method: RequestMethod.Post,
		path: '/reset'
	})
	postPassword: ResourceMethod<ResetPasswordInput, {status: string}>;

	@ResourceAction({
		path: '/reset/{!token}'
	})
	get: ResourceMethod<{ token: string }, {ok: boolean}>;

}
