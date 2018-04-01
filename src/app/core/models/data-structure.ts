import {Subscription} from 'rxjs/Subscription';

export interface Zone {
	id: number;
	name: string;
	defaultZone: string;
	newZone: string;
	group: string;
}

export interface TestResponse {
	aab_id: string;
	name: string;
	expected_status: number;
	response$?: any;
	subscription?: Subscription;
	collapse: boolean;
	commandDescription?: string;
}

export interface PublisherData {
	id: string;
	name: string;
	aab_publisher_id: string;
	auth_password?: string;
	is_forbidden: boolean;
}

export interface Website {
	id: string;
	publisher: PublisherData;
	name: string;
	aab_site_id: string;
	response: boolean;
	state: string;
	site_url: string;
	url_mask: string;
	not_url_mask: string[];
	zones: Zone[];
}

export interface Publisher {
	name: string;
	websites: Website[];
	publisher_data: PublisherData;
}

