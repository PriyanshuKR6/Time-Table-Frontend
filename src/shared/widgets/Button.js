export const Button = (props) => {
    return(<>
        <button onclick={props.handleEvent}>{props.text}</button>;
        
        </>);
}