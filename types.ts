
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface BodyRegion {
  id: string;
  label: string;
  description: string;
  products: Product[];
}

export enum RegionId {
  HeadNeck = 'head-neck',
  Shoulder = 'shoulder',
  Elbow = 'elbow',
  WristHand = 'wrist-hand',
  Spine = 'spine',
  Hip = 'hip',
  Knee = 'knee',
  AnkleFoot = 'ankle-foot'
}
