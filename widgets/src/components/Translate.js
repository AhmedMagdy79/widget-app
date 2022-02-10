// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM;
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];

export default () => {
    const [language, setLanguage] = useState(options[1]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="ui field">
                    <input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    ></input>
                </div>
            </div>
            <Dropdown
                label={"Select Language"}
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr></hr>
            <h3 className="ui header">Out Put</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};
