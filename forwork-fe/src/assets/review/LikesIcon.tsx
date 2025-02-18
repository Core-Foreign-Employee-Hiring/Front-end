interface LikesIconProps{
  className?:string;
}

const LikesIcon = ({className}:LikesIconProps) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M17.3778 6.68121C16.9705 6.30091 16.4051 6.08463 15.8219 6.08463C15.812 6.08463 15.8041 6.08463 15.7942 6.08463L13.1075 6.11527C13.3566 4.70402 13.0818 3.48383 12.7872 2.67818C12.4511 1.75897 12.0122 0.839774 11.089 0.342323C9.74658 -0.382224 8.56434 0.149471 8.03451 0.95152C7.76168 1.36246 7.73993 1.79322 7.72214 2.14107C7.55607 5.42857 6.18009 6.7533 5.5257 7.20209C5.16984 6.93714 4.71513 6.77853 4.22088 6.77853H2.07189C0.929188 6.77853 0 7.62564 0 8.6674V16.1111C0 17.1529 0.929188 18 2.07189 18H4.22088C5.36359 18 6.29277 17.1529 6.29277 16.1111V8.6674C6.29277 8.60252 6.28882 8.53763 6.28289 8.47455C7.19231 7.91041 9.09813 6.25225 9.30374 2.20596C9.31362 2.00229 9.32548 1.79322 9.38875 1.69589C9.58052 1.40391 9.883 1.36786 10.2843 1.58415C10.7608 1.84188 11.0494 2.48172 11.2886 3.13597C11.5536 3.86052 11.7987 4.99781 11.4606 6.2937C11.3796 6.60551 11.4587 6.92993 11.6781 7.18046C11.8976 7.42919 12.2297 7.57157 12.5757 7.56616L15.8199 7.52832H15.8278C15.988 7.52832 16.1382 7.58599 16.2509 7.69053C16.3656 7.79687 16.4249 7.93745 16.4189 8.08705L16.1204 15.5254C16.1046 15.9381 15.7389 16.2769 15.2881 16.3004L8.68889 16.3112C8.25198 16.3112 7.89809 16.6356 7.90007 17.0339C7.90007 17.4323 8.25395 17.7531 8.69087 17.7531L15.3079 17.7423H15.3395C16.6166 17.6918 17.6526 16.742 17.7 15.5776L17.9986 8.13931C18.0203 7.60041 17.7949 7.06871 17.3817 6.68301L17.3778 6.68121ZM4.71118 16.1093C4.71118 16.3563 4.49173 16.5563 4.22088 16.5563H2.07189C1.80104 16.5563 1.5816 16.3563 1.5816 16.1093V8.6656C1.5816 8.41868 1.80104 8.21862 2.07189 8.21862H4.22088C4.49173 8.21862 4.71118 8.41868 4.71118 8.6656V16.1093Z" fill="gray5"/>
</svg>

  )
}

export default LikesIcon