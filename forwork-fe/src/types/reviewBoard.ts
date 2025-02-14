export interface ReviewBoardType {
  
    status: Number,
    success: boolean,
    message: string,
    data: {
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
  }