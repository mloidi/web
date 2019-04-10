import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7777';
// axios.defaults.baseURL = "https://backend-mloidi.herokuapp.com";

axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err.response)
);

export const ResumeService = {
  getItemsByType: async type => {
    return await axios.get(`/mloidi/${type}`);
  },
  getAbout: async () => {
    return await axios.get(`/mloidi/about/`);
  },
  getSkills: async () => {
    return await axios.get(`/mloidi/skills/`);
  }
};

const about = {
  name: 'Mikel Loidi',
  descriptions: [
    { line: 1, text: 'Hi, my name is Mikel Loidi. ' },
    {
      line: 2,
      text:
        'I am a web developer currently located in Pamplona Spain. You know, the running of the bulls. When I’m not running with them, my main focus is to developing new web technologies. In my free time, I am constantly experimenting with new projects, pushing my skills to adapt  the latest web tech to build new web designs.'
    },
    {
      line: 3,
      text:
        'I am passionate about development and design. On the frontend, I work mainly with React while on the backend I work with Node and Express. As for a data base I prefer to use MongoDB.'
    },
    {
      line: 4,
      text:
        'As a growing community, the web industry is one that I have learned so much from and hope to give back just as much. I am mostly excited about the future of this industry. There is so much we have yet to discover, and I cannot wait to see what is coming next.'
    }
  ],
  profile:
    'Advanced developer with 15 years of experience in structuring, developing and implementing applications and innovative use of technology. Able to complete projects efficiently and satisfy clients.',
  areas: [
    'Advanced programming and design skills',
    'Excellent problem solving skills',
    'Strong collaborative skills',
    'Project Management'
  ],
  github: 'https://github.com/mloidi/',
  githubIcon: 'faGithub',
  linkedin: 'https://www.linkedin.com/in/mikel-loidi-ardanaz/',
  linkedinIcon: 'faLinkedin',
  twitter: 'https://twitter.com/mikelloidi',
  twitterIcon: 'faTwitter',
  mail: 'mailto:mikel@mloidi.com',
  mailIcon: 'faEnvelope'
};
const skills = [
  {
    id: 'java',
    description: 'Java',
    icon: 'faJava',
    level: '9'
  },
  {
    id: 'html',
    description: 'HTML',
    icon: 'faHtml5',
    level: '9'
  },
  {
    id: 'css',
    description: 'CSS',
    icon: 'faCss3',
    level: '7'
  },
  {
    id: 'js',
    description: 'Javascript',
    icon: 'faJs',
    level: '7'
  },
  {
    id: 'angular',
    description: 'Angular',
    icon: 'faAngular',
    level: '5'
  },
  {
    id: 'react',
    description: 'React',
    icon: 'faReact',
    level: '7'
  },
  {
    id: 'bootstrap',
    description: 'Bootstrap',
    icon: 'faBootstrap',
    level: '7'
  },
  {
    id: 'node',
    description: 'NodeJS',
    icon: 'faNode',
    level: '6'
  },
  {
    id: 'express',
    description: 'Express',
    icon: null,
    level: '6'
  },
  {
    id: 'angularjs',
    description: 'AngularJS',
    icon: null,
    level: '7'
  }
];

const items = [
  {
    id: 1,
    type: 'job',
    title: 'Tracasa Intrumental',
    titleURL: 'http://itracasa.es',
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        title: 'IT Project Manager',
        fromDate: new Date(2019, 0, 1),
        untilDate: null,
        description: [
          'Project management of the Department of Health of the Government of Navarre.'
        ]
      },
      {
        title: 'Functional Analyst',
        fromDate: new Date(2018, 3, 10),
        untilDate: new Date(2018, 11, 31),
        description: [
          'Functional analysis of BPM processes, applications and integration between information systems'
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'job',
    title: 'University of Navarra',
    titleURL: 'https://www.unav.edu/',
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        title: 'IT Project Manager',
        fromDate: new Date(2014, 0, 1),
        untilDate: new Date(2018, 3, 9),
        description: [
          'Lead, coordinate and supervise the evolution and maintenance plan of the technological solutions of different functional areas',
          'Gathered requirements, definition and improvement of processes, functional analysis, approval of offers, risk analysis, definition of integrations.',
          'Coordination of multidisciplinary teams and project management.'
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'study',
    title: 'Master in Project Management PMP',
    titleURL:
      'https://www.unir.net/ingenieria/master-project-management/549200001441/',
    place: 'Universidad Internacional de la Rioja',
    placeURL: 'https://www.unir.net',
    finishDate: new Date(2016, 6, 1),
    location: 'Logroño, La Rioja (Spain)',
    description: [
      'With the Master in PMP I have acquired the knowledge and skills to:'
    ],
    descriptionDetails: [
      'Generate added value to the business cycle by adequately managing knowledge.',
      'Make important decisions in pressure environments.',
      'Develop a global strategic vision and its impact on the business.',
      'Optimize the management of scarce resources (Time, money, personnel, etc.)',
      'Manage conflicts and work teams.',
      'Manage properly and minimize situations of uncertainty and risk.',
      'Design efficient business strategies and achieve different business objectives (costs, margins, etc.)'
    ]
  },
  {
    id: 4,
    type: 'job',
    title: 'CONASA',
    placeURL: 'http://www.conasa.es',
    titleURL: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        title: 'Developer',
        fromDate: new Date(2011, 3, 15),
        untilDate: new Date(2013, 11, 31),
        description: [
          'Development of reports in BI Publisher, development of web applications and evolutionary and corrective maintenance of the applications of the University of Navarra.'
        ]
      },
      {
        title: 'IT Project Manager',
        fromDate: new Date(2011, 6, 1),
        untilDate: new Date(2012, 3, 15),
        description: [
          'Responsible for coordinating the evolutionary and corrective of the PDM and PLM (Windchill) application for Gamesa.'
        ]
      }
    ]
  },
  {
    id: 5,
    type: 'job',
    title: 'AVALON Tecnologias de la Informacion',
    titleURL: 'https://grupoavalon.es/index.html',
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        title: 'Developer',
        fromDate: new Date(2009, 5, 1),
        untilDate: new Date(2011, 6, 31),
        description: [
          'Analysis and development of web applications for the Department of Education of the Government of Navarre.'
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'study',
    title: 'Undergraduate in Informatics Engineering',
    titleURL: 'https://www.ehu.eus/es/grado-ingenieria-informatica',
    place: 'University of Basque Country',
    placeURL: 'https://www.ehu.eus/en/en-home',
    finishDate: new Date(2010, 6, 1),
    location: 'San Sebastian, Gipuzkoa (Spain)',
    description: [
      'These are the main competences that I have acquired with this degree:'
    ],
    descriptionDetails: [
      'Ability to conceive and develop centralized or distributed computer systems or architectures integrating hardware, software and networks.',
      'Ability to conceive, develop and maintain computer systems, services and applications using software engineering methods as an instrument for quality assurance.',
      'Ability to conceive, write, organize, plan, develop and sign projects in the field of computer engineering with the purpose of designing, developing or operating systems, services and computer applications.',
      'Ability to define, evaluate and select hardware and software platforms for the development and execution of systems, services and computer applications.',
      'Ability to design, develop, evaluate and ensure the accessibility, ergonomics, usability and security of the systems, services and computer applications, as well as the information they manage.',
      'Ability to solve problems with initiative, decision making, autonomy and creativity.',
      'Knowledge of basic subjects and technologies, which enable the learning and development of new methods and technologies, as well as those that provide them with great versatility to adapt to new situations.'
    ]
  },
  {
    id: 8,
    type: 'job',
    title: 'Ibermatica',
    titleURL: 'http://ibermatica.com',
    location: 'Donostia, Gipuzkoa (Spain)',
    roles: [
      {
        title: 'Developer',
        fromDate: new Date(2007, 1, 8),
        untilDate: new Date(2009, 4, 30),
        description: [
          'Analysis and development of applications for the Department of Justice of the Basque Government',
          'Analysis and development of core applications for Kutxabank bank.'
        ]
      }
    ]
  },
  {
    id: 9,
    type: 'job',
    title: 'TB-Solutions',
    titleURL: null,
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        title: 'Developer',
        fromDate: new Date(2006, 5, 1),
        untilDate: new Date(2007, 1, 7),
        description: [
          'Development of electronic banking, with J2EE technology, applying the MVC architecture. Specifically, analysis and development of the web module of collections and payments.'
        ]
      }
    ]
  },
  {
    id: 10,
    type: 'job',
    title: 'Freelance',
    titleURL: null,
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        title: 'Developer',
        fromDate: new Date(2002, 6, 1),
        untilDate: new Date(2006, 5, 30),
        description: ['Development and maintenance of web applications.']
      }
    ]
  },
  {
    id: 11,
    type: 'study',
    title: 'Development of Computer Applications',
    titleURL: null,
    place: 'Instituto María Ana Sanz',
    placeURL: 'http://www.mariaanasanz.es/',
    finishDate: new Date(2002, 6, 1),
    location: 'Pamplona, Navarra (Spain)',
    description: [
      'These are the main competences that I have acquired with this study:'
    ],
    descriptionDetails: [
      'Configure and exploit computer systems.',
      'Program relational databases.',
      'Develop software components in structured programming languages.',
      'Develop software components in object - oriented programming languages.',
      'Install and configure business resource planning and customer relationship management systems.',
      'Develop software elements in the client environment.',
      'Develop software elements in the server environment.',
      'Implement, verify and document web applications in Internet, intranet and extranet environments.'
    ]
  },
  {
    id: 12,
    type: 'course',
    place: 'Wes Bos',
    placeUrl: 'https://wesbos.com/',
    roles: [
      {
        title: 'Fullstack Advanced React & GraphQL',
        titleUrl: 'https://advancedreact.com',
        description:
          'It’s GraphQL API with Node.js on the backend and React and Apollo on the front end. The course cover everything from authentication and sending email to uploading photos and caching data. The entire front - end is built in modern React and GraphQL. ',
        fromDate: null,
        untilDate: null,
        finishDate: new Date(2018, 10, 1),
        appTitle: 'Sick Fits',
        appUrl: 'https://mloidi-store-prod.herokuapp.com',
        imageURL:'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_300/v1554404407/mloidi/sickFits.png',
        maxTech: 7,
        technologies: [
          {
            line: 1,
            id: 'html',
            description: 'HTML',
            icon: 'faHtml5'
          },
          {
            line: 2,
            id: 'css',
            description: 'CSS',
            icon: 'faCss3'
          },
          {
            line: 3,
            id: 'js',
            description: 'JavaScript',
            icon: 'faJs'
          },
          {
            line: 4,
            id: 'react',
            description: 'React',
            icon: 'faReact'
          },
          {
            line: 5,
            id: 'nextJS',
            description: 'Next.js',
            icon: null
          },
          {
            line: 6,
            id: 'graphQL',
            description: 'GraphQL',
            icon: null
          },
          {
            line: 7,
            id: 'reactApollo',
            description: 'React-Apollo',
            icon: null
          }
        ]
      },
      {
        title: 'React For Beginners',
        titleUrl: 'https://reactforbeginners.com/',
        description:
          'A premium step-by-step training course to get you building real world React + Firebase apps and website components. ',
        fromDate: null,
        untilDate: null,
        finishDate: new Date(2018, 6, 1),
        appTitle: 'Catch Of The Day',
        appUrl: 'https://cotd.mloidi.com',
        imageURL:'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_300/v1554404407/mloidi/catchDay.png',
        maxTech: 5,
        technologies: [
          {
            line: 1,
            id: 'html',
            description: 'HTML',
            icon: 'faHtml5'
          },
          {
            line: 2,
            id: 'css',
            description: 'CSS',
            icon: 'faCss3'
          },
          {
            line: 3,
            id: 'js',
            description: 'JavaScript',
            icon: 'faJs'
          },
          {
            line: 4,
            id: 'react',
            description: 'React',
            icon: 'faReact'
          },
          {
            line: 5,
            id: 'firebase',
            description: 'Firebase',
            icon: null
          }
        ]
      },
      {
        title: 'Learn Node',
        titleUrl: 'https://learnnode.com/',
        description:
          'A premium training course to learn to build apps with Node.js, Express and MongoDB.',
        fromDate: null,
        untilDate: null,
        finishDate: new Date(2018, 5, 1),
        appTitle: "Now That's Delicious!",
        appUrl: 'https://mloidi-app-jskauyrogh.now.sh',
        imageURL:'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_300/v1554404407/mloidi/thatsDelicious.png',
        maxTech: 8,
        technologies: [
          {
            line: 1,
            id: 'html',
            description: 'HTML',
            icon: 'faHtml5'
          },
          {
            line: 2,
            id: 'css',
            description: 'CSS',
            icon: 'faCss3'
          },
          {
            line: 3,
            id: 'js',
            description: 'JavaScript',
            icon: 'faJs'
          },
          {
            line: 4,
            id: 'node',
            description: 'NodeJS',
            icon: 'faNode'
          },
          {
            line: 5,
            id: 'mongodb',
            description: 'MongoDB',
            icon: null
          },
          {
            line: 6,
            id: 'passport',
            description: 'Passport',
            icon: null
          },
          {
            line: 7,
            id: 'googlemaps',
            description: 'Google Maps',
            icon: null
          },
          {
            line: 8,
            id: 'express',
            description: 'Express',
            icon: null
          }
        ]
      }
    ]
  },
  {
    id: 13,
    type: 'course',
    place: 'Microsoft Academy',
    placeUrl: 'https://academy.microsoft.com/en-us/professional-program/',
    roles: [
      {
        title: 'Microsoft Professional Program for Front-End Web Development',
        titleUrl:
        'https://academy.microsoft.com/en-us/certificates/3f8d10b9-784c-403b-bd96-367182a13aa3/',
        description: 'Knowledge acquired:',
        descriptionDetails: [
          'Build Dynamic Web Apps',
          'Use CSS to Build a Powerful Web UI',
          'Use UI Frameworks to Build a Responsive Web UI',
          'Use a Framework to Build a Dynamic Web UI',
          'Use a Framework to Simplify and Manage Data Binding',
          'Use a Framework to Build a Complex Single - Page Application',
          'Use Cloud Services to Create Web Apps with High Availability and Scale',
          'Use DevOps Tools and Processes to Manage Web Application Projects'
        ],
        fromDate: null,
        untilDate: null,
        finishDate: new Date(2018, 4, 1),
        appTitle: 'World Wide Importers',
        appUrl: 'https://worldwideimporters.mloidi.com',
        imageURL:'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_300/v1554404407/mloidi/worldImporters.png',
        maxTech: 5,
        technologies: [
          {
            line: 1,
            id: 'html',
            description: 'HTML',
            icon: 'faHtml5'
          },
          {
            line: 2,
            id: 'css',
            description: 'CSS',
            icon: 'faCss3'
          },
          {
            line: 3,
            id: 'js',
            description: 'JavaScript',
            icon: 'faJs'
          },
          {
            line: 4,
            id: 'angularjs',
            description: 'AngularJS',
            icon: null
          },
          {
            line: 5,
            id: 'bootstrap',
            description: 'Bootstrap',
            icon: 'faBootstrap'
          }
        ]
      }
    ]
  },
  {
    id: 14,
    type: 'project',
    title: 'Mikel Loidi',
    titleURL: 'https://mloidi.com',
    imageURL: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_300/v1554396432/mloidi/mloidi.png',
    location: null,
    description: 'My personal webpage.',
    maxTech: 5,
    technologies: [
      {
        line: 1,
        id: 'html',
        description: 'HTML',
        icon: 'faHtml5'
      },
      {
        line: 2,
        id: 'css',
        description: 'CSS',
        icon: 'faCss3'
      },
      {
        line: 3,
        id: 'js',
        description: 'JavaScript',
        icon: 'faJs'
      },
      {
        line: 4,
        id: 'react',
        description: 'React',
        icon: 'faReact'
      },
      {
        line: 5,
        id: 'styled-components',
        description: 'Styled Components',
        icon: null
      }
    ]
  },
  {
    id: 15,
    type: 'project',
    title: 'Cristaleria Bricovidrio',
    titleURL: 'https://bricovidrio.mloidi.com',
    imageURL: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_300/v1554396432/mloidi/bricovidrio.png',
    location: null,
    description: 'Sample demo webpage for a glassware company.',
    maxTech: 4,
    technologies: [
      {
        line: 1,
        id: 'html',
        description: 'HTML',
        icon: 'faHtml5'
      },
      {
        line: 2,
        id: 'css',
        description: 'CSS',
        icon: 'faCss3'
      },
      {
        line: 3,
        id: 'js',
        description: 'JavaScript',
        icon: 'faJs'
      },
      {
        line: 4,
        id: 'react',
        description: 'React',
        icon: null
      }
    ]
  },
  {
    id: 16,
    type: 'project',
    title: 'News about ...',
    titleURL: 'https://news.mloidi.com',
    imageURL: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_300/v1554396432/mloidi/news.png',
    location: null,
    description: 'Some randoms news.',
    maxTech: 5,
    technologies: [
      {
        line: 1,
        id: 'html',
        description: 'HTML',
        icon: 'faHtml5'
      },
      {
        line: 2,
        id: 'css',
        description: 'CSS',
        icon: 'faCss3'
      },
      {
        line: 3,
        id: 'js',
        description: 'JavaScript',
        icon: 'faJs'
      },
      {
        line: 4,
        id: 'react',
        description: 'React',
        icon: 'faReact'
      },
      {
        line: 5,
        id: 'styled-components',
        description: 'Styled Components',
        icon: null
      }
    ]
  },
];

export const OfflineService = {
  getAbout: () => {
    return about;
  },
  getSkills: () => {
    return skills;
  },
  getItemsByType: type => {
    let itemsByType = [];
    items.map(item => {
      if (item.type === type) {
        itemsByType.push(item);
      }
      return itemsByType;
    });
    return itemsByType;
  }
};