import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Online Job Portal",
            description:
                "A full-stack web application designed to connect job seekers with recruiters. Built using React, Spring Boot, TypeScript, and MongoDB, it provides a seamless platform for posting and applying to jobs. The system includes JWT-based authentication, role-based access (Admin, Recruiter, Job Seeker), job search & filtering, and application tracking.",
            tech: ["React", "Spring Boot", "TypeScript", "MongoDB"],
            link: "https://github.com/Seemarekha/Online-Job-Portal",
            image: "https://media.istockphoto.com/id/1349094945/photo/human-using-a-computer-laptop-for-searching-for-job-and-fill-out-personal-data-on-job-website.jpg?s=612x612&w=0&k=20&c=nVCY302pin29eP1rN0eBGstQN3WF4YQTWvZ4TvAs21g=" // Replace with project screenshot
        },
        {
            title: "Subject Registration System",
            description:
                "A web-based application that allows students to register for subjects online with a simple and secure process. Developed using Java, JSP, Servlets, and PostgreSQL, it supports student authentication, subject enrollment, subject availability validation, and admin management features. This project ensures smooth handling of course registrations by reducing manual effort and errors.",
            tech: ["Java", "JSP", "Servlets", "PostgreSQL"],
            link: "https://github.com/Seemarekha/Subject_Registration",
            image: "https://thumbs.dreamstime.com/b/online-application-registration-form-graphics-concept-75688264.jpg"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black">

            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    🚀 Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index}>
                            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="h-40 w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-400 mb-3">{project.title}</h3>
                                        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-blue-500/10 text-blue-400 px-3 py-1 text-xs rounded-full"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

        </section>
    );
};
