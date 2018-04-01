import {Injectable} from '@angular/core';
import {ResourceParams, ResourceAction} from 'ngx-resource';
import {ResourceMethod, ResourceMethodStrict} from 'ngx-resource/src/Interfaces';
import {RequestMethod} from '@angular/http';
import {RestClient} from './rest-client';

interface QueryInput {
	page?: number;
	perPage?: number;
	dateFrom?: string;
	dateTo?: string;
	isRead?: string;
}

export interface LoggedInUser {
	id: number;
	client_id: number;
	email: string;
	fullname: string;
	password: string;
	api_key: string;
	frontend_rights: LoggedInUserRights;
}

export interface LoggedInUserRights {
	live_demo: boolean;
	config: boolean;
	zones: boolean;
	stats: boolean;
	ad_scan: boolean;
	super_admin: boolean;
}

@Injectable()
@ResourceParams({
	url: '/users'
})
export class UserResource extends RestClient {
	@ResourceAction({
		isArray: true
	})
	query: ResourceMethod<QueryInput, LoggedInUser[]>;

	@ResourceAction({
		path: '/{!id}'
	})
	get: ResourceMethod<{ id: any }, LoggedInUser>;

	@ResourceAction({
		path: '/{!id}'
	})
	get2: ResourceMethodStrict<LoggedInUser, { id: any }, LoggedInUser>;

	@ResourceAction({
		method: RequestMethod.Post
	})
	save: ResourceMethod<LoggedInUser, LoggedInUser>;

	@ResourceAction({
		method: RequestMethod.Put,
		path: '/{!id}'
	})
	update: ResourceMethod<LoggedInUser, LoggedInUser>;

	@ResourceAction({
		method: RequestMethod.Delete,
		path: '/{!id}'
	})
	remove: ResourceMethod<{ id: any }, any>;

	create(data: LoggedInUser, callback?: (res: LoggedInUser) => any): LoggedInUser {
		return this.save(data, callback);
	}

}
