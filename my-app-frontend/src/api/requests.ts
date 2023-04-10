import { FormState } from "../reducers/form-reducer";

//http://localhost:8080/complaint
export async function createForm(params:FormState):Promise<FormState> {
    const httpResponse = await fetch("//http://localhost:8080/complaint", {
        method:"POST",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const complaint = await httpResponse.json();
    return complaint;
}