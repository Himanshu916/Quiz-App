

type ErrorProps = {
    children:string
}


const Error : React.FC<ErrorProps>= ({children})=>
{
    return (
        <div className="errorMessage">
            <h1>
           {children }
           </h1>
        </div>
    )
}

export default Error;