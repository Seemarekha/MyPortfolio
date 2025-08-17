import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Mantine",
        "Tabler"
    ];

    const backendSkills = [
        "Java",
        "Spring Boot",
        "Hibernate",
        "JDBC",
        "JSP & Servlets",
        "Python",
        "PostgreSQL",
        "MySQL",
        "MongoDB"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4">

                <RevealOnScroll>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg text-center">
                            I am a <span className="text-blue-400 font-semibold">passionate Full Stack Developer </span>
                            with strong skills in both frontend and backend technologies...
                        </p>
                        {/* Skills */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <div className="rounded-xl p-6 bg-white/5 shadow-md">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 bg-white/5 shadow-md">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Education & Training */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <RevealOnScroll>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-md">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li><strong>BSc in Mathematics (Hons)</strong> – Berhampur University (2019–2022)</li>
                                <li><strong>MCA</strong> – Centurion University of Technology and Management (2022–2024)</li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-md">
                            <h3 className="text-xl font-bold mb-4">💡 Training</h3>
                            <p className="text-gray-300">
                                Completed <strong>Java Full Stack Development</strong> course from{" "}
                                <span className="text-blue-400">JSpiders, Marathahalli, Bangalore</span>,
                                where I worked on projects involving <em>Java, Spring Boot, React, Databases, and REST APIs</em>.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>

    );
};
