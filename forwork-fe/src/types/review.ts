export interface ReviewType {
  status: Number,
  success: boolean,
  message: string,
  data: {
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
}