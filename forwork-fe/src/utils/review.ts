import {SortContentType} from "@/src/types/review";
import {format, formatDistanceToNow} from "date-fns";
import {ko} from "date-fns/locale";

export const sortContents: SortContentType[] = ["날짜순", "조회순"]

/**
 * pos t에 있는 날짜 형식으로 변경
 * @param date "2025-02-26 14:00:01"
 */
export function formatDate(date: string) {
    const d = new Date(date);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000; // 현재 시간과의 차이(초)
    if (diff < 60 * 1) {
        // 1분 미만일땐 방금 전 표기
        //TODO: 몊분 전
        return "방금 전";
    }
    if (diff < 60 * 60 * 24 * 7) {
        // 7일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
        return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    if (diff < 60 * 60 * 24 * 30 * 12) {
        // 1년, 1달 기준
        //TODO: 날짜로 나오게 하는게 좋을 것 같다.
        return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    if (diff > 60 * 60 * 24 * 30 * 12) {
        // 1년 넘어가면
        return format(d, "yy.MM.dd"); // 날짜 포맷
    }
}

/**
 * backend enum 타입으로 변경
 * @param sortContent "날짜순" | "조회순"
 */
export const sortContentToEnum = (sortContent: SortContentType) => {
    switch (sortContent) {
        case "조회순":
            return "popular"
        default:
            return "newest"
    }
}

