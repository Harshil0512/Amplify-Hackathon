import React from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Authors = ()=>{
    const {fname,lname} = useParams();
    return <>
        <ProfileCard fname={fname} lname={lname}/>
    </>
}

export default Authors;