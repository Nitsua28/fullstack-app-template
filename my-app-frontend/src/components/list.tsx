import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router";


export function List(){
    //const router = useNavigate();
    //const selector = useSelector((store: ListState) => store)
    //const sendDispatch = useDispatch()<SouthParkActions>

    useEffect(()=>{ 
      
        (async ()=>{
            
            //await sendDispatch({type: "REQUEST_GET_ALL_MEETINGS"});
            
        })();
        
      },[]);
      
    return(
        <>
            <table>
                <tr>
                    <th>Meeting ID</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Summary</th>
                    {/* <th>Complaint title</th> */}
                    {/* <th>attendees</th>
                    <th>speakers</th> */}
                    <th>attend?</th>
                    <th>Report complaint to Meeting</th>
                </tr>
                
                
            </table>
        </>
    );
}