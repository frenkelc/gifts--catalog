export class Product {
    constructor(public id: number,
        public ProductTitle: string,
        public Description: string,
        public ProductImage : string,
        public ThumbnailProductImage : string,
        public Price : number,
        public PriceLabel : string,
        public ProductTags : number[],
        public IsTopGift : boolean,
        public IsPopularGift : boolean,
        public ProductLink : string,
        public IsAffiliate : boolean,
        public ShippingMandatory : boolean,
        public PersonalMessageMaxLength : number,
        public StoreName: string,
){}
}
