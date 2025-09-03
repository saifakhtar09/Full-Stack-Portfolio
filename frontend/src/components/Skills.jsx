import { 
  FaReact, FaNodeJs, FaJsSquare, FaPython, FaDocker, FaAws, 
  FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaGithub
} from 'react-icons/fa';
import { SiSpring, SiMysql } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: 'React', color: 'text-cyan-400' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-400' },
    { icon: <FaJsSquare />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <FaJava />, name: 'Java', color: 'text-red-500' },
     { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-600' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-600' },
    { icon: <SiSpring />, name: 'Spring', color: 'text-green-500' },
    { icon: <FaDocker />, name: 'Docker', color: 'text-blue-500' },
    { icon: <FaAws />, name: 'AWS', color: 'text-orange-400' },
    { icon: <SiMysql />, name: 'MySQL', color: 'text-blue-600' },
    { icon: <FaGitAlt />, name: 'Git', color: 'text-red-500' },
    { icon: <FaGithub />, name: 'GitHub', color: 'text-gray-400' },
  ];

  return (
    <section id="skills" className="py-20 bg-card/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-sans">
            <span className="text-primary">Technologies</span> & Skills
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group cursor-pointer transform transition hover:-translate-y-3 hover:scale-105 duration-300"
              data-testid={`skill-${skill.name.toLowerCase()}`}
            >
              <div className="bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center justify-center hover:bg-card/80 transition duration-300 hover:shadow-2xl text-center">
                <div className={`text-5xl mb-4 ${skill.color} transition-colors group-hover:text-primary`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-primary group-hover:text-accent text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
