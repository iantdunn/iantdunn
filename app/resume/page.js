import React from "react";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import styles from './resume.module.css'

async function getMarkdown() {
    const res = await fetch(
        "https://raw.githubusercontent.com/ian1dunn/resume/main/Ian_Dunn_Resume.md",
        { cache: "no-store" } // fetch fresh content
    );
    return res.text();

    // try {
    //     const filePath = path.join(process.cwd(), 'app', 'resume', 'resume-test.md');
    //     const markdown = fs.readFileSync(filePath, 'utf8');
    //     return markdown;
    // } catch (error) {
    //     console.error('Error reading markdown file:', error);
    //     return 'Error loading resume content.';
    // }
}

export default async function ResumePage() {
    const markdown = await getMarkdown();

    return (
        <main className={styles.resumeContainer}>
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </main>
    );
}