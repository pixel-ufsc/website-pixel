const SmallRightArrowIcon = ({ color = '#000', strokeWidth = 6, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 41" fill="none" {...props}>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="m3 3 17 17.5L3 38"
            />
        </svg>
    );
};

export default SmallRightArrowIcon;
