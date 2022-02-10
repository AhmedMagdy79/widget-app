import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ text, language }) => {
    const [translation, setTranslation] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            (async () => {
                const { data } = await axios.post(
                    "https://translation.googleapis.com/language/translate/v2",
                    {},
                    {
                        params: {
                            q: text,
                            target: language.value,
                            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                        },
                    }
                );
                setTranslation(data.data.translations[0].translatedText);
            })();
        }, 500);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [language, text]);

    return <div>{translation}</div>;
};
