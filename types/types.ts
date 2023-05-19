export interface TypeBook{
    id:number,
    title:string,
    pages:number,
    pubDate:string,
    description:string,
    downloads:number,
    view:number,
    author:{
        id:number,
        fullName:string
    },
    category:{
        id:number,
        string:string
    },
    file:{
        id:number,
        url:string,
    },
    coverImg:{
        id:number,
        formats:{
            thumbnail:{
                url:string,
            },
            small:{
                url:string,
            },
            medium:{
                url:string
            },
        },
        url:string,
    }
};

export interface TypeBooksResponse{
    hits:TypeBook[],
    processingTimeMs: number,
    limit: number,
    offset: number,
    estimatedTotalHits: number
}

export interface TypeCategory{
    id:number,
    attributes:{
        string:string
    }
}
export interface TypeCategoriesStrapiRes{
    data:TypeCategory[],
    meta:TypeMeta[],
}

interface TypeMeta{
    pagination:{
        page:number,
        pageSize:number,
        pageCount:number,
        total:number,
    }
}