import SectionOne from "./components/SectionOne/SectionOne"
import SectionTwo from "./components/SectionTwo/SectionTwo"


const App = () => {

  const users = [
    { 
      img: 'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg',
      intro: '',
      tag: 'Satisfied' ,
      color: 'royalblue'
    },
     { 
      img: 'https://images.pexels.com/photos/18321500/pexels-photo-18321500.jpeg',
      intro: '',
      tag: 'Underserved', 
      color : 'crimson'
    },
     { 
      img: 'https://images.pexels.com/photos/8528744/pexels-photo-8528744.jpeg',
      intro: '',
      tag: 'Underbanked',
      color: 'green'
    },
      
  ]


  return (
    <div>
      <SectionOne users={users} />
    </div>
  )
}

export default App