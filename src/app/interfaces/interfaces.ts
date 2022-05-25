//CARRITO
export interface CarritoCompra {
  typeC: string;
  menuItems: MenuItem[];
  offsetC: number;
  numberC: number;
  totalMenuItemsC: number;
  processingTimeMsC: number;
  expiresC: number;
  isStaleC: boolean;
}

export interface MenuItem {
  idCa: number;
  titleCa: string;
  imageCa: string;
  imageTypeCa: string;
  restaurantChainCa: string;
  servingSizeCa?: string;
  readableServingSizeCa?: string;
  servingsCa: ServingsC  ;
}

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

//PROMOCION

export interface RespuestaTopHeadlinesPR {
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
  servingSizePR: string;
  readableServingSizePR: string;
  servings: Servings;
}

export interface Servings {
  number: number;
  sizePR: number;
  unitPR: string;
}

//CARNE

export interface RespuestaTopHeadlinesC {
  typeC: string;
  menuItems: MenuItem[];
  offsetC: number;
  numberC: number;
  totalMenuItemsC: number;
  processingTimeMsC: number;
  expiresC: number;
  isStaleC: boolean;
}

export interface MenuItem {
  idC: number;
  titleC: string;
  imageC: string;
  imageTypeC: string;
  restaurantChainC: string;
  servingSizeC?: string;
  readableServingSizeC?: string;
  servingsC: ServingsC  ;
}

export interface ServingsC {
  numberC: number;
  sizeC?: number;
  unitC?: string;
}

//PESCADO

export interface RespuestaTopHeadlinesP {
  type: string;
  menuItems: MenuItem[];
  offset: number;
  number: number;
  totalMenuItems: number;
  processingTimeMs: number;
  expires: number;
}

export interface MenuItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
  restaurantChain: string;
  servingSizeP?: string;
  readableServingSizeP?: string;
  servings: Servings;
}

export interface Servings {
  number: number;
  sizeP?: number;
  unitP?: string;
}

//POLLO

export interface RespuestaTopHeadlinesPO {
  type: string;
  menuItems: MenuItem[];
  offset: number;
  number: number;
  totalMenuItems: number;
  processingTimeMs: number;
  expires: number;
}

export interface MenuItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
  restaurantChain: string;
  servingSizePO?: string;
  readableServingSizePO?: string;
  servings: Servings;
}

export interface Servings {
  number: number;
  sizePO?: number;
  unitPO?: string;
}

//VERDURAS

export interface RespuestaTopHeadlinesV {
  type: string;
  menuItems: MenuItem[];
  offset: number;
  number: number;
  totalMenuItems: number;
  processingTimeMs: number;
  expires: number;
}

export interface MenuItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
  restaurantChain: string;
  servingSizeV: string;
  readableServingSizeV: string;
  servings: Servings;
}

export interface Servings {
  number: number;
  sizeV?: number;
  unitV?: string;
}

//FRUTAS

export interface RespuestaTopHeadlinesF {
  type: string;
  menuItems: MenuItem[];
  offset: number;
  number: number;
  totalMenuItems: number;
  processingTimeMs: number;
  expires: number;
}

export interface MenuItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
  restaurantChain: string;
  servingSizeF?: string;
  readableServingSizeF?: string;
  servings: Servings;
}

export interface Servings {
  number: number;
  sizeF?: number;
  unitF?: string;
}

//LACTEOS

export interface RespuestaTopHeadlinesL {
  type: string;
  menuItems: MenuItem[];
  offset: number;
  number: number;
  totalMenuItems: number;
  processingTimeMs: number;
  expires: number;
}

export interface MenuItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
  restaurantChain: string;
  servingSizeL?: string;
  readableServingSizeL: string;
  servings: Servings;
}

export interface Servings {
  number: number;
  sizeL?: number;
  unitL?: string;
}