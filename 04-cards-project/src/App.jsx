import Card from './components/Card'
import User from './components/User'

const App = () => {

  const jobs = [
  {
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    company: "Google",
    logo: "https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png",
    posted: "2 days ago",
    position: "Frontend Software Engineer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$135/hr",
    location: "Bangalore, India",
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/4/44/Microsoft_logo.svg",
    posted: "1 day ago",
    position: "Software Development Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Hyderabad, India",
  },
  {
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "3 days ago",
    position: "Product Designer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$125/hr",
    location: "Bangalore, India",
  },
  {
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    posted: "4 days ago",
    position: "React Software Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$145/hr",
    location: "Gurgaon, India",
  },
  {
    company: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    posted: "6 days ago",
    position: "Machine Learning Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$155/hr",
    location: "Pune, India",
  },
  {
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "2 days ago",
    position: "Senior Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$150/hr",
    location: "Mumbai, India",
  },
  {
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    posted: "7 days ago",
    position: "UX Researcher",
    type: "Full Time",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Noida, India",
  },
  {
    company: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    posted: "3 days ago",
    position: "Full Stack Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$130/hr",
    location: "Hyderabad, India",
  },
  {
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    posted: "1 day ago",
    position: "Cloud Software Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Bangalore, India",
  },
];


console.log(jobs)

  return (
    <div className='parent'>
    
      {/* <Card /> */}
      {/* <User /> */}
      {
        jobs.map((val,idx) => {
          return <div key={idx}>
            <Card company={val.company} logo={val.logo} posted={val.posted} position={val.position} type={val.type} level={val.level} salary={val.salary} location={val.location} />
          </div>
        })
      }
    </div>
  )
}

export default App