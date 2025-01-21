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

const achievements = [
  {
    number: '10,000+',
    label: 'Farmers Served',
    description: 'Successfully helped farmers across multiple states'
  },
  {
    number: '50+',
    label: 'Districts Covered',
    description: 'Expanding our reach across India'
  },
  {
    number: '95%',
    label: 'Satisfaction Rate',
    description: 'Consistently high customer satisfaction'
  },
  {
    number: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance for farmers'
  }
]



export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Empowering Farmers with Modern Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          FarmConnectHub is dedicated to transforming agriculture through technology
          and sustainable practices. We believe in making modern farming accessible
          to everyone.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To revolutionize farming practices by providing accessible technology
            and services that enhance productivity, sustainability, and profitability
            for farmers across India.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To create a future where every farmer has access to modern agricultural
            solutions, leading to improved crop yields, better resource management,
            and sustainable farming practices.
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.label}
              className="text-center bg-white rounded-lg shadow-md p-6"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {achievement.label}
              </div>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    className="w-full h-[280px] object-cover"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium mt-1">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-primary mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
          <p className="text-gray-600">
            Constantly exploring and implementing new technologies to improve
            farming practices and efficiency.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-primary mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
          <p className="text-gray-600">
            Promoting environmentally conscious farming methods and resource
            conservation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-primary mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
          <p className="text-gray-600">
            Building a strong network of farmers, experts, and agricultural
            professionals.
          </p>
        </div>
      </div>
    </div>
  )
}
