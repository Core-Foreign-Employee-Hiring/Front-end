import {JobCategoryType} from "@/src/types/register";
import CancelIcon from "@/src/assets/common/CancelIcon";
import {jobCategoryList, toggleData} from "@/src/utils/common";
import Button from "@/src/components/common/Button";
import {handleSelectList, weekDaysList, workDaysList, workDurationList, workTimeList} from "@/src/utils/register";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Filter from "@/src/components/common/Filter";

// interface Props {
//     setWorkDuration:
// }

const WorkTimeFilter = () => {
    // const {selectedJobCategories, setSelectedWorkTime, isWorkTimeFilterFocused, setIsWorkTimeFilterFocused, jobCategoriesSelectedContent, setWorkTimeSelectedContent} = props;
    // const togglePreferredCondition = (selectedJobCategory: JobCategoryType) => {
    //     setSelectedJobCategories((prevState) => {
    //         if (prevState.includes(selectedJobCategory)) {
    //             // 이미 선택된 경우 제거
    //             return prevState.filter((condition) => condition !== selectedJobCategory);
    //         } else {
    //             // 선택되지 않은 경우 추가 (최대 5개 제한)
    //             return prevState.length < 5 ? [...prevState, selectedJobCategory] : prevState;
    //         }
    //     });
    // };

    return (
        <div></div>
        // <div>
        //     {isWorkTimeFilterFocused && (
        //         <section className={"flex flex-col gap-y-[32px] rounded-[24px] w-full border border-gray2 p-5"}>
        //             <section className={"flex flex-col gap-y-4"}>
        //                 {/*선택된 리스트들*/}
        //                 <section className={"flex justify-between items-center"}>
        //                     <div className={"flex flex-wrap gap-2"}>
        //                         {selectedJobCategories.map((selectedJobCategory) => {
        //                             return (
        //                                 <div
        //                                     key={selectedJobCategory}
        //                                     className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
        //                                     {selectedJobCategory}
        //                                     <CancelIcon
        //                                         onClick={() => {
        //                                             togglePreferredCondition(selectedJobCategory)
        //                                         }}
        //                                         className={"cursor-pointer"}
        //                                         size={20}
        //                                         color={"#6F717C"}/>
        //                                 </div>
        //                             )
        //                         })}
        //                     </div>
        //                 </section>
        //                 {/* 근무 기간 */}
        //                 <div className={"flex gap-x-3"}>
        //                     {workDurationList.map((duration) => {
        //                         return (
        //                             <Button
        //                                 type={"button"}
        //                                 onClick={() => {
        //                                     toggleData(duration, setWorkDuration);
        //                                 }}
        //                                 key={duration}
        //                                 className={workDuration === duration ? "bg-main-button" : "border-gray2-button"}
        //                                 secondClassName={"flex justify-center items-center py-4 px-5"}>
        //                                 {duration}
        //                             </Button>
        //                         )
        //                     })}
        //                 </div>
        //                 {/*근무 요일*/}
        //                 <section className={"flex flex-col gap-y-5"}>
        //                     <section className={"flex flex-col gap-y-3"}>
        //                         <div className={"flex gap-x-2 items-center"}>
        //                             <button
        //                                 type={"button"}
        //                                 onClick={() => {
        //                                     handleSelectList(workDaysDirectList, setWorkDaysDirectList, setWorkDaysSelectList);
        //                                     setWorkDay("");
        //                                 }}
        //                                 className={workDaysDirectList
        //                                     ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
        //                                     : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
        //                                 {workDaysDirectList && (
        //                                     <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
        //                             </button>
        //                             <div className={"subtitle-lg"}>직접선택</div>
        //                         </div>
        //                         {workDaysDirectList && (
        //                             <div className={"flex gap-x-3"}>
        //                                 {weekDaysList.map((day) => {
        //                                     return (
        //                                         <Button
        //                                             type={"button"}
        //                                             onClick={() => {
        //                                                 toggleWeekDays(day)
        //                                             }}
        //                                             key={day}
        //                                             className={workWeekDays.includes(day) ? "bg-main-button" : "border-gray2-button"}
        //                                             secondClassName={"flex justify-center items-center w-full py-4 px-6"}>
        //                                             {day}
        //                                         </Button>
        //                                     )
        //                                 })}
        //                             </div>
        //                         )}
        //                     </section>
        //
        //                     {/**/}
        //                     <div>
        //                         <section className={"flex flex-col gap-y-3"}>
        //                             <section className={"flex gap-x-2 items-center"}>
        //                                 <button
        //                                     type={"button"}
        //                                     onClick={() => {
        //                                         handleSelectList(workTimeDirectList, setWorkTimeDirectList, setWorkTimeSelectList);
        //                                         setWorkTime("")
        //                                     }}
        //                                     className={workTimeDirectList
        //                                         ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
        //                                         : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
        //                                     {workTimeDirectList && (
        //                                         <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
        //                                 </button>
        //                                 <div className={"button-md text-gray5"}>직접선택</div>
        //                             </section>
        //                             {workTimeDirectList && (
        //                                 <div className={"flex gap-x-3"}>
        //                                     <div className={"w-full"}>
        //                                         <SelectedFilterContent selectedContent={startTime}
        //                                                                className={startTime === "시작시간" ? "py-3 text-gray4" : "py-3 "}
        //                                                                setIsFocused={setIsStartTimeFilterContentFocused}/>
        //                                         {isStartTimeFilterContentFocused && (
        //                                             <Filter filterContents={startTimeFilterContents}/>)}
        //                                     </div>
        //                                     <div className={"w-full"}>
        //                                         <SelectedFilterContent selectedContent={endTime}
        //                                                                className={endTime === "종료시간" ? "py-3 text-gray4" : "py-3"}
        //                                                                setIsFocused={setIsEndTimeFilterContentFocused}/>
        //                                         {isEndTimeFilterContentFocused && (
        //                                             <Filter filterContents={endTimeFilterContents}/>)}
        //                                     </div>
        //                                 </div>
        //                             )}
        //                         </section>
        //                         <section className={"flex flex-col gap-y-3"}>
        //                             <section className={"flex gap-x-2 items-center"}>
        //                                 <button
        //                                     type={"button"}
        //                                     onClick={() => {
        //                                         handleSelectList(workTimeSelectList, setWorkTimeSelectList, setWorkTimeDirectList);
        //                                         setStartTime("시작시간");
        //                                         setEndTime("종료시간");
        //                                     }}
        //                                     className={workTimeSelectList
        //                                         ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
        //                                         : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
        //                                     {workTimeSelectList && (
        //                                         <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
        //                                 </button>
        //                                 <div className={"button-md text-gray5"}>목록에서 선택</div>
        //                             </section>
        //                             {workTimeSelectList && (
        //                                 <div className={"grid grid-cols-[repeat(auto-fill,minmax(20%,1fr))] gap-3"}>
        //                                     {workTimeList.map((time) => {
        //                                         return (
        //                                             <Button
        //                                                 type={"button"}
        //                                                 onClick={() => {
        //                                                     toggleData(time, setWorkTime)
        //                                                 }}
        //                                                 key={time}
        //                                                 className={workTime === time ? "bg-main-button" : "border-gray2-button"}
        //                                                 secondClassName={"flex justify-center items-center w-full py-4 px-5"}>
        //                                                 {time}
        //                                             </Button>
        //                                         )
        //                                     })}
        //                                 </div>
        //                             )}
        //                         </section>
        //                     </div>
        //                     <section className={"flex flex-col gap-y-3"}>
        //                         <div className={"flex gap-x-2 items-center"}>
        //                             <button
        //                                 type={"button"}
        //                                 onClick={() => {
        //                                     handleSelectList(workDaysSelectList, setWorkDaysSelectList, setWorkDaysDirectList);
        //                                     setWorkWeekDays([]);
        //                                 }}
        //                                 className={workDaysSelectList
        //                                     ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
        //                                     : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
        //                                 {workDaysSelectList && (
        //                                     <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
        //                             </button>
        //                             <div className={"subtitle-lg"}>목록에서 선택</div>
        //                         </div>
        //                         {workDaysSelectList && (
        //                             <div className={"flex gap-x-3"}>
        //                                 {workDaysList.map((day) => {
        //                                     return (
        //                                         <Button
        //                                             type={"button"}
        //                                             onClick={() => {
        //                                                 toggleData(day, setWorkDay);
        //                                             }}
        //                                             key={day}
        //                                             className={workDay === day ? "bg-main-button" : "border-gray2-button"}
        //                                             secondClassName={"flex justify-center items-center w-full py-4 px-6"}>
        //                                             {day}
        //                                         </Button>
        //                                     )
        //                                 })}
        //                             </div>
        //                         )}
        //                     </section>
        //                 </section>
        //
        //             </section>
        //
        //             <section className={"flex justify-end gap-x-2"}>
        //                 <Button
        //                     onClick={() => {
        //                         setSelectedJobCategories([])
        //                     }}
        //                     className={"border-gray2-button"}
        //                     secondClassName={"flex items-center justify-center w-[120px] py-3"}>초기화</Button>
        //                 <Button
        //                     onClick={() => {
        //                         setJobCategoriesSelectedContent(selectedJobCategories.join(", "))
        //                         setIsJobCategoriesFilterFocused(false)
        //                     }}
        //                     className={"bg-main-button"}
        //                     secondClassName={"flex items-center justify-center w-[120px] py-3"}>
        //                     {selectedJobCategories.length} / 5 적용
        //                 </Button>
        //             </section>
        //         </section>
        //     )}
        // </div>
    )
}
export default WorkTimeFilter;
