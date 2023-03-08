import React from "react";

import { ResponseProps } from "../interfaces";

const Response: React.FC<ResponseProps> = ({
    requestResult,
}) => {
    console.log(requestResult)
    const errorMessage = requestResult?.message;
    return (
        <>
            {errorMessage ? <div test-id="login-error">Invalid request: {errorMessage}</div> : 
            <div test-id="login-success">User name is: {requestResult.firstName} {requestResult.lastName}</div>}
        </>
    );
};

export default Response;
