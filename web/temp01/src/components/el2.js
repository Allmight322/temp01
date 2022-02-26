export  const El2 = (props) => {
    const element = props.element1
    const zag = props.zag

    return <div>
        <h1>{zag}</h1>
        {element}
    </div>
}