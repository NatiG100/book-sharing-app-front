import { TypeBook } from "./types/types";

export const books:TypeBook[] = [
  {
    "id": 1,
    "attributes": {
        "title": "Counterfeits of Christianity",
        "pages": 450,
        "pubDate": "2015-01-04",
        "description": "The reality is that John 1:1–3 clearly reveals the deity of Jesus Christ, the\nWord, being the Creator God (see also Colossians 1 and Hebrews 1). As\nsuch it confirms many other passages in Scripture that teach that Christ is God. Early Church fathers such as Ignatius, who was a disciple of John the Apostle, also recognized Jesus as God.",
        "downloads": 0,
        "view": 2,
        "author": {
            "data": {
                "id": 1,
                "attributes": {
                    "fullName": "Hodge",
                }
            }
        },
        "category": {
            "data": {
                "id": 1,
                "attributes": {
                    "string": "Theology",
                }
            }
        },
        "file": {
            "data": {
                "id": 2,
                "attributes": {
                    "url": "/uploads/Bodie_Hodge_and_Roger_Patterson_World_Religions_and_Cults_Vol_1_1_Master_Books_2015_98c2b6a6c6.pdf",
                }
            }
        },
        "coverImg": {
            "data": {
                "id": 3,
                "attributes": {
                    "formats": {
                        "thumbnail": {
                            "url": "/uploads/thumbnail_hodge_740a2c3295.PNG"
                        },
                        "small": {
                            "url": "/uploads/small_hodge_740a2c3295.PNG"
                        },
                        "medium": {
                            "url": "/uploads/medium_hodge_740a2c3295.PNG"
                        }
                    },
                    "url": "/uploads/hodge_740a2c3295.PNG",
                }
            }
        }
    }
}
]