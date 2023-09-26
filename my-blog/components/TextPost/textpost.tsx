"use client"
import {useEffect, useState} from "react";
import style from "./textPost.module.css"


function TextPost ({path}: String) {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // Загрузка текстового файла из директории `public`
        fetch(path)
            .then(response => response.text())
            .then(data => {
                setHtmlContent(data);
            })
            .catch(error => {
                console.error('Error loading text file:', error);
            });
    }, []);

    return (
        <div className={style.article} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
}

export default TextPost
