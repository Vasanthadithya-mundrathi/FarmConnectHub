import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'SRINATH MANDA',
    role: 'WEB DEVELOPER',
    education: 'STUDENT OF CBIT',
    rollNo: '160123749303',
    interests: 'ETHICAL HACKING AND NETWORKING',
    image: '/images/creators/srinath.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:srinath@example.com'
    }
  },
  {
    name: 'PANDRE DURGA PRASAD',
    role: 'WEB DEVELOPER',
    education: 'STUDENT OF CBIT',
    rollNo: '160123729306',
    interests: 'MACHINE LEARNING & GENERATIVE AI',
    phone: '9533903390',
    image: '/images/creators/durgaprasad.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:durgaprasad@example.com'
    }
  },
  {
    name: 'VASANTH ADITHYA M',
    role: 'WEB DEVELOPER AND DESIGNER',
    education: 'STUDENT OF CBIT',
    rollNo: '160123749049',
    interests: 'ETHICAL HACKER, PENTESTER',
    image: '/images/creators/vasanth.jpeg',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:vasanth@example.com'
    }
  }
]

export default function CreatorsTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 25%',
                      transform: 'none'
                    }}
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium mt-1">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.education}</p>
                <p className="text-gray-600">Roll No: {member.rollNo}</p>
                <p className="text-gray-600">Interests: {member.interests}</p>
                {member.phone && (
                  <p className="text-gray-600 mt-2 flex items-center">
                    <FaPhone className="mr-2" />
                    {member.phone}
                  </p>
                )}
                
                <div className="flex space-x-4 mt-4">
                  <a
                    href={member.social.github}
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.social.email}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
