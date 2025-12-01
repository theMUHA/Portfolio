function switchTab(tabName) {
    const contentBox = document.getElementById("content");

    const sections = {
        about: `
            <h3>About Me</h3>
            <p>Étudiant en 2ème année du cycle ingénieur à ENSATE.</p>

            <h3>Contact</h3>
            <p>Email: test123@email.com</p>
            <p>Phone: +212 6 00 89 33 62</p>
        `,

        skills: `
            <h3>Skills</h3>
            <p>Montage des videos, Graphic design</p>
        `,

        projects: `
            <h3>Projects</h3>
            <p>Projet d'activite d'ouverture</p>
        `,

        experience: `
            <h3>Experience</h3>
            <p>ioadwadsadadadnadoiwodnow111-n-a !adw@@@</p>
        `,

        education: `
            <h3>Education</h3>
            <p>ENSAte</p>
        `
    };

    contentBox.innerHTML = sections[tabName];
}
