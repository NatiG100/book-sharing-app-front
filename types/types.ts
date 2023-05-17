export interface TypeBook{
    id:number,
    attributes:{
        title:string,
        pages:number,
        pubDate:string,
        description:string,
        downloads:number,
        view:number,
        author:{
            data:{
                id:number,
                attributes:{
                    fullName:string
                }
            }
        },
        category:{
            data:{
                id:number,
                attributes:{
                    string:string
                }
            }
        },
        file:{
            data:{
                id:number,
                attributes:{
                    url:string,
                }
            }
        },
        coverImg:{
            data:{
                id:number,
                attributes:{
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
            }
        }
    }
};

export interface TypeBooksResponse{
    data:TypeBook[],
    meta:{
        pagination:{
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }
}