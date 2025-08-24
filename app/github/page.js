import { useEffect } from "react";

export default function GitHubRedirect() {
    useEffect(() => {
        // Redirect to GitHub profile
        window.location.href = "https://github.com/ian1dunn";
    }, []);

    return (
        <main>
            <h1>Redirecting to GitHub...</h1>
            <p>
                If you're not redirected automatically,
                <a href="https://github.com/ian1dunn"> click here to visit my GitHub profile</a>.
            </p>
        </main>
    );
}
