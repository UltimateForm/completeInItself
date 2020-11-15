const API_URL = "https://api.imgur.com/3";

export interface Image {
	id: string;
	title: string;
	description: string;
	datetime: number;
	type: string;
	animated: boolean;
	width: number;
	height: number;
	size: number;
	views: number;
	bandwidth: number;
	deletehash?: string;
	name?: string;
	section: string;
	link: string;
	gifv?: string;
	mp4?: string;
	webm?: string;
	looping?: boolean;
	vote?: string;
	favorite: boolean;
	nsfw?: boolean;
	account_url?: string;
	account_id?: number;
}

export interface Album {
	id: string;
	title: string;
	description: string;
	datetime: number;
	cover: string;
	cover_width: number;
	cover_height: number;
	account_url?: string;
	account_id?: number;
	privacy: string;
	layout: string;
	views: number;
	link: string;
	favorite: boolean;
	nsfw?: boolean;
	section: string;
	order: number;
	deletehash?: string;
	images_count: number;
	images: Array<Image>;
}

const commonHeaders = {
	"Authorization": "Client-ID 3799ee171489f49"
}

export async function getAlbum(albumHash: string): Promise<Album> {
	const response = await fetch(`${API_URL}/album/${albumHash}`, { headers: commonHeaders, method: "GET" })
	if (response.status < 200 || response.status >= 300) {
		return Promise.reject(response.status);
	}
	const json = await response.json();
	if (json?.data === undefined) return Promise.reject("response data invalid");
	return Promise.resolve(json.data as Album);
}

export async function getAlbumImages(albumHash: string) {
	const response = await fetch(`${API_URL}/album/${albumHash}/images`, { headers: commonHeaders, method: "GET" })
	if (response.status < 200 || response.status >= 300) {
		return Promise.reject(response.status);
	}
	const json = await response.json();
	if (json?.data === undefined) return Promise.reject("response data invalid");
	return Promise.resolve(json.data as Image[]);
}