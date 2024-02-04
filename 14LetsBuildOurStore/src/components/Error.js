import {useRouteError, Link} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return(
        <>
            <h1>Oops!!</h1>
            <h2>{error?.error?.message}</h2>
            <h3>{error?.status} : {error?.statusText}</h3>
            <h3 className="error-back-home">
                <Link to="/">Back Home</Link>
            </h3>
        </>
    )
}

export default Error;