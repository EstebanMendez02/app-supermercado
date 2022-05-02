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