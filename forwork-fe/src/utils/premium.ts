export const formatDateRange = (dateRange: string): string => {
    const [startDate, endDate] = dateRange.split(" ~ "); // 시작 날짜와 종료 날짜 분리
    const end = new Date(endDate);

    // 월(M)과 일(D)을 추출하여 "~ M/D" 형식으로 변환
    const formattedEndDate = `~ ${end.getMonth() + 1}/${end.getDate()}`;

    return `${formattedEndDate} 까지`;
};
