interface IProps {
    btnText?: string;
    btnIcons?: React.ReactNode; //Định nghĩa component
    btnStyle?: React.CSSProperties; //Định nghĩa css
}
const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle } = props;

    return (
        <button className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    );
};

export default ResizeButton;
