import { JobCategoryType } from "./register"

export interface ReviewType {
        id: Number,
        region1: string,
        region2: string,
        businessField: string,
        title: string,
        content: string,
        createdAt: string,
        readCount: Number,
        userId: string,
        commentCount: Number,
        mine: boolean
}

export interface ReviewBoardType {
    totalElements: Number,
    totalPages: Number,
    page: Number,
    size: Number,
    content: [
      {
        id: Number,
        region1: string,
        region2: string,
        businessField: string,
        title: string,
        content: string,
        createdAt: string,
        readCount: Number,
        commentCount: Number
      }
    ]
}

export interface reviewFormType {
    title: string,
    content: string,
    region1: string,
    region2: string,
    businessFields: JobCategoryType
}

export interface locationType {
  id: string,
  result: {
            resultdata: [{
                sido_nm: string,
                sgg_nm: string
              }]
            }
  
}