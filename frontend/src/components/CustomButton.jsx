"use client"

const CustomButton = ({ title, containerStyle, handleClick }) => {
    return (
        <button disabled={false} type={"button"} className={`custom-btn ${containerStyle}`} onClick={handleClick}>
            <span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default CustomButton;