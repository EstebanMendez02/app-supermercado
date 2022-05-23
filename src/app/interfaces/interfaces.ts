export interface RespuestaTopHeadlines {
  type: string;
  menuItems: MenuItem[];
  offset: number;
  number: number;
  totalMenuItems: number;
  processingTimeMs: number;
  expires: number;
  isStale: boolean;
}

export interface MenuItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
  restaurantChain: string;
  servingSize?: any;
  readableServingSize?: any;
  servings: Servings;
}

export interface Servings {
  number: number;
  size?: any;
  unit?: any;
}

//carne

export interface RootObject {
 // results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RespuestaTopHeadlinesC {
  id: number;
  name: string;
  image: string;
}

//pescado

export interface RootObjectP {
  //results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RespuestaTopHeadlinesP {
  id: number;
  name: string;
  image: string;
}

//pollo

export interface RootObjectPO {
  
  //results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RespuestaTopHeadlinesPO {
  id: number;
  name: string;
  image: string;
}

//verduras

export interface RootObjectV {
  //results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RespuestaTopHeadlinesV {
  id: number;
  name: string;
  image: string;
}

//frutas

export interface RootObjectF {
  //results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RespuestaTopHeadlinesF {
  id: number;
  name: string;
  image: string;
}

//lacteos

export interface RootObjectL {
  //results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RespuestaTopHeadlinesL {
  id: number;
  name: string;
  image: string;
}