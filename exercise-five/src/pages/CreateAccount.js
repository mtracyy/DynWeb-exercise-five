import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({CreateAccountFunction}) {
    return (
        <div>
            <h1>Sign Up</h1>
            <CreateAccountForm CreateAccountFunction={CreateAccountFunction}/>
        </div>
    );
}

export default CreateAccount;