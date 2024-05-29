interface SimpleButtonProps {
    state: boolean,
    onClick: () => void,
};

export const SimpleButton = (props: SimpleButtonProps) => {
    return <button onClick={props.onClick}>{props.state ? "ON":"OFF"}</button>;
}