import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {FC, useState} from "react";
import {Side} from "./Component/Side/Side";
import {Content} from "./Component/Content/Content";
import {dataContext, principalData} from "./Component/Interfaces and Types/Interfaces";

const theData: dataContext = {data:{data:null, url:null, isInput: true, index:0, change:false}, setData: null}
export const PrincipalData = React.createContext<dataContext>(theData);

export const App: FC = () => {
    const [values, setValues] = useState<principalData>({url: null, data: null,isInput: true, index: 0, change:false});

    return (
        <PrincipalData.Provider  value={{data:values, setData:setValues}}>
            <div className="d-flex principal-container">
                <Side/>
                <Content/>
            </div>
        </PrincipalData.Provider>
    );
};