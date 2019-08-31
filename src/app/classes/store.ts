import { Product } from './product';

export class Store {
    constructor(public Products: Product[],
        public StoreName: string,
        public StoreLogo: string,
        public StoreOrder : number,
        public StoreOrder1 : number,
        public RegularStoreLogo : number,
        public IsAffiliate : boolean,
        public StoreText : string,
        public HeaderImage : string,
        public BGColor : string,
        public ShippingMandatory : boolean,
        public PersonalMessageMaxLength : number,
        public StoreId : number,
        public DeliveryType : number,
        public ShippingPolicyText : string,
        public SchedulingType : number,

){}
}
