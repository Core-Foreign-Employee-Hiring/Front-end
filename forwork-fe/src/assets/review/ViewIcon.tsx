interface ViewIconProps {
  className?: string; // className은 선택적 prop
}

const ViewIcon = ({className}:ViewIconProps) => {
  return(
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" >
<path id="Vector" d="M9 1.6C12.1009 1.6 14.8664 3.304 16.2164 6C14.8664 8.696 12.1091 10.4 9 10.4C5.89091 10.4 3.13364 8.696 1.78364 6C3.13364 3.304 5.89909 1.6 9 1.6ZM9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0ZM9 4C10.1291 4 11.0455 4.896 11.0455 6C11.0455 7.104 10.1291 8 9 8C7.87091 8 6.95455 7.104 6.95455 6C6.95455 4.896 7.87091 4 9 4ZM9 2.4C6.97091 2.4 5.31818 4.016 5.31818 6C5.31818 7.984 6.97091 9.6 9 9.6C11.0291 9.6 12.6818 7.984 12.6818 6C12.6818 4.016 11.0291 2.4 9 2.4Z" fill="#6F717C"/>
</svg>
  )
}
export default ViewIcon

