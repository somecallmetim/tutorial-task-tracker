const Button = ({ color, text}) => {
    return (
        <div>
            <button className='btn' style={{backgroundColor: color}}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Default'
}

export default Button
