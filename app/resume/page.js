export default function ResumePage() {
    return (
        <div style={{
            position: 'fixed',
            width: '100%',
            height: 'calc(100vh - 4rem)',
        }}>
            <iframe
                src={"https://iantdunn.github.io/resume/Ian_Dunn_Resume.pdf"}
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none'
                }}
                title="Resume PDF"
            />
        </div>
    );
}
