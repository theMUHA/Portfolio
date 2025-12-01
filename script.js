function switchTab(tabName) {
    const contentBox = document.getElementById("content");

    const sections = {
        about: `
            <h3>About Me</h3>
            <p>Write your About Me section here...</p>

            <h3>Contact</h3>
            <p>Email: your@email.com</p>
            <p>Phone: +212 6 00 00 00 00</p>
        `,

        skills: `
            <h3>Skills</h3>
            <p>Write your skills here...</p>
        `,

        projects: `
            <h3>Projects</h3>
            <p>Write your projects here...</p>
        `,

        experience: `
            <h3>Experience</h3>
            <p>Write your experience here...</p>
        `,

        education: `
            <h3>Education</h3>
            <p>Write your education here...</p>
        `
    };

    contentBox.innerHTML = sections[tabName];
}
