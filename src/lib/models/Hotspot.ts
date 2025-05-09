export interface HotspotOption {
	id: string;
	name: string;
	icon?: string;
	img?: string;
  }
  
  export interface Hotspot {
	name: string;
	options: string[] | HotspotOption[];
  }