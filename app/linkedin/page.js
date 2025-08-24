"use client";

import { useEffect } from "react";

export default function GitHubRedirect() {
    useEffect(() => {
        // Redirect to LinkedIn profile
        window.location.href = "https://linkedin.com/in/iantdunn";
    }, []);

    return (
        <main>
            <h1>Redirecting to LinkedIn...</h1>
            <p>
                {"If you're not redirected automatically, "}
                <a href="https://linkedin.com/in/iantdunn">click here to visit my LinkedIn profile</a>.
            </p>
        </main>
    );
}
