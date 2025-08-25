export default function ResumePage() {
    // Using PDF.js viewer to display the PDF inline
    const pdfUrl = encodeURIComponent("https://raw.githubusercontent.com/iantdunn/resume/refs/heads/main/Ian_Dunn_Resume.pdf");

    return (
        <div style={{
            position: 'fixed',
            width: '100%',
            height: 'calc(100vh - 4rem)',
        }}>
            <iframe
                src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfUrl}`}
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
