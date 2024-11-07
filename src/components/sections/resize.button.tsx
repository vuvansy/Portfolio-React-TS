interface IProps {
    btnText?: string;
    btnIcons?: React.ReactNode; //Định nghĩa component
    btnStyle?: React.CSSProperties; //Định nghĩa css
    onClick?: () => void;
}
const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle, onClick } = props;

    return (
        <button onClick={onClick} className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    );
};

export default ResizeButton;
