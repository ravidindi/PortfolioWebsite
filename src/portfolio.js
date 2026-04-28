/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {sassFalse} from "sass";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dindi",
  title: "Hi all, I'm Sai Prasanna Kumar",
  subTitle: emoji(
    "A passionate Full Stack Wizard 🧙‍♂️ with a knack for crafting web apps using Angular 🅰️, React ⚛️, and Spring Boot 🍃, coupled with a flair for integration wizardry with Slack-CLI 💬  and Python sorcery 🐍. Oh, and let's not forget my side quest of experimenting with and exploring intelligent agents 🤖, brewing new possibilities through automation and autonomy! ✨"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1e12dtqsPmROb3FTwnamHkapltN8u_C7K/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ravidindi",
  linkedin: "https://www.linkedin.com/in/ravidindi/",
  gmail: "ravidindisaiprasannakumar@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Architect and implement end-to-end solutions, seamlessly bridging front-end experiences with robust back-end systems"
    ),
    emoji(
      "⚡ Specialize in creating scalable, full-stack applications while mastering the art of system integration for streamlined workflows and enhanced productivity"
    ),
    emoji(
      "⚡ Integration of third party services such as ServiceNow/ Jira / GCP / RingCentral"
    ),
    emoji(
      "⚡ Building intelligent agentic systems and exploring emerging AI capabilities to create autonomous, adaptive solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-seedling"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fa-brands fa-typescript"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sastra Deemed University",
      logo: require("./assets/images/sastraImage.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2019 - August 2023",
      desc: "Secured a CGPA of 8.9 / 10.0",
      descBullets: [
        "Four-year member and two-year leader of the Daksh Web Development Team",
        "Actively engaged in multiple hackathons and coding challenges",
        "Contributed to community service through NSS and as a Plasma volunteer"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: sassFalse // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer 2",
      company: "Morgan Stanley",
      companylogo: require("./assets/images/morganStanley.png"),
      date: "Aug 2025 – Present",
      desc: "Full-stack engineer in the Sales and Distribution team driving integrations across CRM platforms and enterprise tools, while building agentic AI workflows for business automation.",
      descBullets: [
        "Designed human-in-the-loop agentic AI workflows using Spring AI and integrated them with enterprise chatbot systems.",
        "Built Velocity, an autonomous engineering agent that picks Jira issues, makes code changes, raises PRs, and iteratively fixes CI/CD failures."
      ]
    },
    {
      role: "Software Engineer",
      company: "Zoominfo",
      companylogo: require("./assets/images/Zoominfo.webp"),
      date: "August 2023 – Jun 2025",
      desc: "Integration specialist adept at connecting diverse SaaS applications with enterprise systems, having developed multiple integrations in a team environment linking 20+ platforms including SAP and Coupa.",
      descBullets: [
        "Spearheaded migration of integrations from Mulesoft to Dell Boomi, single-handedly developing 5 end-to-end integrations and providing critical support for remaining integrations.",
        "Engineered Slack-based automations and built an AI-powered classification tool that reduced research time by 80% and won a hackathon."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Morgan Stanley",
      companylogo: require("./assets/images/morganStanley.png"),
      date: "Jan 2023 – Jul 2023",
      desc: "Interned with the Sales and Distribution Team, contributing to revenue and sales reporting solutions.",
      descBullets: [
        "Developed a full-stack mobile application in Angular/Ionic with Spring Boot and MongoDB, used by 4000+ salespersons.",
        "Received recognition from global leaders and secured 2nd place in the firm's MongoDB hackathon."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Morgan Stanley",
      subtitle: "Awarded 2nd place in the company's MongoDB hackathon.",
      image: require("./assets/images/morganStanley.png"),
      imageAlt: "Morgan Stanley logo",
      footerLink: [
        {
          name: "Internship Certificate",
          url: "https://drive.google.com/file/d/1uYwAATvthTjL52L12PwWaMtGQYUMdzw6/view?usp=sharing"
        }
      ]
    },
    {
      title: "University of Michigan",
      subtitle:
        "Completed Certifcation on Programming for Everybody (Getting Started with Python",
      image: require("./assets/images/universityofMichiganLogo.png"),
      imageAlt: "University of Michigan Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kBpypp5w-MtEf0wJ8xod92c-GZu6C-S9/view?usp=sharing"
        }
      ]
    },
    {
      title: "Udemy",
      subtitle: "Completed the course on Docker, React and Next.js",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Docker",
          url: "https://drive.google.com/file/d/1sKZ3ks4lCKus7k5BuHLH2z75FtkQhJgj/view?usp=sharing"
        },
        {
          name: "React with Redux",
          url: "https://drive.google.com/file/d/13VB7AlHJt5U0Aeb5fCYMMOKMRfNH56HG/view?usp=sharing"
        },
        {
          name: "Next.js",
          url: "https://drive.google.com/file/d/1WRiH3Ae2-bXK8X8a_iH5DC2Li7IghUq4/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8328535664",
  email_address: "ravidindisaiprasannakumar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
