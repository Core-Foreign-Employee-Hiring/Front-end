import Tag from "@/src/components/common/Tag";
import {SalaryType} from "@/src/types/register";

export const renderSalaryType = (salaryType: SalaryType) => {
    switch (salaryType) {
        case "시급":
            return <Tag className={"border-sub1-tag"}>시급</Tag>
        case "주급":
            return <Tag className={"border-sub3-tag"}>주급</Tag>
        case "일급":
            return <Tag className={"border-sub5-tag"}>일급</Tag>
        case "월급":
            return <Tag className={"border-sub2-tag"}>일급</Tag>
        default:
            return <Tag className={"border-sub2-tag"}>연봉</Tag>
    }
}

export function formatFileSize(bytes: number): string {
    const units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB'];
    if (bytes === 0) return '0 Byte';

    const unitIndex = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = bytes / Math.pow(1024, unitIndex);

    // 소수점 한 자리까지 표시
    return `${size.toFixed(1)} ${units[unitIndex]}`;
}
