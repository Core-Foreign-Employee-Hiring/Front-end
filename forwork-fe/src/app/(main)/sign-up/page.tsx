"use client";

import {useState} from "react";

import EmployeeSignUp from "@/src/components/sign-up/EmployeeSignUp";
import EmployerSignUp from "@/src/components/sign-up/EmployerSignUp";


const SignUpPage = () => {
   const [type, setType] = useState<"Employee" | "Employer">("Employer");

   return (
       <main>
           {type === "Employee" && (<EmployeeSignUp setType={setType}/>)}
           {type === "Employer" && (<EmployerSignUp setType={setType}/>)}
       </main>
   )
}
export default SignUpPage;
