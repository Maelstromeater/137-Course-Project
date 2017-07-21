import React, { Component } from 'react';
import request from 'superagent';
import {TemperatureConverter} from 'cis137-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Orbitron" /> 
        </head>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Lannans Lazer Lair</h1>
          <getWeatherApi />
          <Thermometer />
        </div>
        <div className="Home-nav">
          <Router>
            <div>
              <nav>
                <a><Link to="/">Home</Link></a>
                |
                <a><Link to="/about">About</Link></a>
                |
                <a><Link to="/events">Events</Link></a>
                |
                <a><Link to="/membership">Membership</Link></a>
              </nav>

              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/membership" component={Membership}/>
              <Route path="/events" component={EventsPage}/>
            </div>
          </Router>
         </div>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return(
      <div className="Home-page">
        <div className="Welcome-pic">
          <img src="https://oretornodaasia.files.wordpress.com/2012/12/2805855-illuminated-blue-neon-welcome-sign-at-night1.jpg?w=1024&h=484"/>
        </div>
        <div className="Welcome">
          <p>
            Welcome to Lannan's Lazer Lair, please enjoy the following meal: 
            Spicy jalapeno doner pastrami ut voluptate nulla jerky t-bone. 
            Tempor proident nisi, t-bone ipsum et in. 
            Ribeye aliqua ut sausage aliquip eiusmod in kielbasa anim tenderloin strip steak. 
            Laborum pork elit, tempor in in pork belly picanha anim capicola. 
            Pig enim spare ribs cupim, esse ham pork belly commodo et irure labore ex elit.
          </p>
          <p>
            Spicy jalapeno beef pork belly qui fugiat, pariatur ut pancetta. Alcatra fugiat shank spare ribs, 
            magna minim biltong esse irure sed. Ham swine meatloaf mollit bresaola tri-tip excepteur drumstick nostrud. 
            Elit nulla leberkas et, jowl cupidatat dolore sirloin fugiat cow in voluptate est alcatra ham. 
            Kevin burgdoggen deserunt chuck pastrami sed capicola laboris beef ribs meatloaf ullamco.
          </p>
        </div>

         <hr/>
        
        <div className="Costs">
          <h2>Pricing:</h2>
          <ul>
            <li>One Session: 13$ per person</li>
            <li>Two Sessions: 11$ per person</li>
            <li>Three Sessions: 9$ per person</li>
          </ul>
        </div>
        <div className="Price-pic" >
          <img src="https://media.giphy.com/media/KoGyFsUdE2Bj2/giphy.gif"/>
        </div>

        <hr/>

        <div className="Hours">
          <h2>Hours:</h2>
          <ul>
            <li>Monday: 3:00PM - 8:00PM</li>
            <li>Tuesday: 3:00PM - 8:00PM</li>
            <li>Wednesday: 3:00PM - 8:00PM</li>
            <li>Thursday: 3:00PM - 8:00PM</li>
            <li>Friday: 3:00PM - 8:00PM</li>
            <li>Saturday: 12:00PM - 12:00PM</li>
            <li>Sunday: 1:00PM - 7:00PM</li>
          </ul>
        </div>
        <div className="Laser-watch">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/da/5b/46/da5b46d7ccb5f672770b9a65d01169b5--awesome-things-nice-things.jpg"/>
        </div>
      </div>
    );
  }
}

class AboutPage extends Component {
  render() {
    return (
      <div className="About">
        <h1>About Us:</h1>
        <div className="History">
          <p>
            I'm sure you'll find our section on the history of the company to be very meaty. 
            Spicy jalapeno bacon picanha beef, qui laborum velit anim consectetur. 
            Pig dolor rump adipisicing strip steak exercitation consequat bresaola salami shoulder ham. 
            Occaecat esse tenderloin excepteur cillum, officia est t-bone. 
            Cupidatat veniam filet mignon cillum, boudin minim kielbasa landjaeger excepteur qui non. 
            Irure enim pancetta ut nisi, bacon reprehenderit ipsum. Aute flank sunt cillum reprehenderit.
          </p>
          <p>
            Kielbasa ham deserunt nulla salami, irure anim jowl tongue cow id spare ribs ad pig lorem. 
            Nisi dolore venison officia, tri-tip aliquip meatloaf. Est ribeye dolore, pork pig elit beef ribs boudin picanha proident kevin landjaeger. 
            Turkey alcatra nulla, ham hock ex proident excepteur shoulder.
          </p>
          <p>
            Burgdoggen shank boudin brisket tempor sausage. Laboris est laborum elit aliqua irure et swine. 
            Do meatball ground round jerky cupidatat ham hock sausage et doner qui frankfurter pariatur ut sed. 
            Swine ipsum nulla, pork strip steak leberkas turducken aliqua capicola irure corned beef pig eu. 
            Eiusmod drumstick labore, porchetta jerky elit beef ribs id short ribs dolore venison pancetta prosciutto.
          </p>
          <p>
            Sausage burgdoggen prosciutto nulla qui do elit eiusmod turkey hamburger alcatra magna quis. 
            Sausage brisket elit, swine shankle bacon dolore culpa sed andouille irure. 
            Dolor sirloin pariatur nisi duis. Deserunt corned beef shoulder, pork turkey sunt pork belly aliqua consectetur magna.
          </p>
        </div>
        <h1>Board Members:</h1>
        <div className="Staff">
          <StaffCardDisplay />
        </div>
      </div>
    );
  }
}

class EventsPage extends Component {
  render() {
    return(
      <div className="Events">
        <EventCardDisplay />
      </div>
    );
  }
}

class MembershipPage extends Component {
  render() {
    return(
      <h1>Placeholder</h1>
    );
  }
}

class Thermometer extends Component {

  constructor(props){
    super(props);
    this.state = {
      temp: ''
    };
  }

  componentDidMount(){
    request
      .get(`http://api.openweathermap.org/data/2.5/weather?zip=21158,us&APPID=${process.env.REACT_APP_WEATHER_ACCESS_KEY}`)
      
      .end((err, res) => {
        if(err){
          console.error(err);
          return;
        }

        this.setState({
          temp: res.body.main.temp
        });
      })
  }

  render() {
    var temperature = <TemperatureConverter kelvin={this.state.temp} toUnit="F"/>
    return(
      <div className="temperature-sample">
        <h3>Current Local Temperature: {temperature}</h3>
      </div>
    );
  }
}

function Card(props) {
  return (
  <div className="profile">
      <span className="avatar"><img src={props.avatarUrl} alt={props.name}/></span>
      <span className="name">{props.name}</span>
      <span className="blurb">{props.blurb}</span>
  </div>
  );
}

function StaffCardDisplay() {
  return (
    <div>
      <Card 
        name="Moe"  
        avatarUrl="https://pbs.twimg.com/media/C38GNtEWIAAt8tG.jpg"
        const blurb={
          <p>
            Moses Harry "Moe" Horwitz (June 19, 1897 – May 4, 1975), known professionally as Moe Howard, 
            was an American actor and comedian best known as the leader of The Three Stooges. 
            His distinctive hairstyle came about when he was a boy and cut off his curls with a pair of scissors and a bowl on his head, 
            producing a ragged shape approximating a helmet or bowl.
          </p>
          }
        />
      <Card 
        name="Larry" 
        avatarUrl="https://lh3.googleusercontent.com/-Cn7jCyiYlhY/VuGhdm_JH5I/AAAAAAAAAuA/G8GNIYDSG04/w480-h406/cuz.jpg"
        blurb={
          <p>
            Louis Feinberg, known professionally as Larry Fine, (October 5, 1902 – January 24, 1975) was an American comedian and actor, 
            who is best known as a member of the comedy act The Three Stooges.
          </p>
          }
        />
      <Card 
        name="Curly" 
        avatarUrl="https://vignette3.wikia.nocookie.net/stooges/images/4/4e/Curlyhoward.jpg/revision/latest/scale-to-width-down/224?cb=20090515181544"
        blurb={
          <p>
            Curly Howard was an American comedian and vaudevillian. 
            He is best known as a member of the American slapstick comedy team the Three Stooges, 
            along with his older brothers Moe Howard and Shemp Howard, and actor Larry Fine. 
            Curly is generally considered the most popular and recognizable of the Stooges. 
            He is well known for his high-pitched voice, vocal expressions ("nyuk-nyuk-nyuk!","woo-woo-woo!", 
            and barking like a dog), as well as his inventive physical comedy, improvisations, and athleticism.
          </p>
          }
        />
                
    </div>
  );
}

function EventCard(props) {
  return (
  <div className="profile">
      <h2 className="title">{"Event: "+props.title}</h2>
      <h2 className="time">{"Date: "+props.time}</h2>
      <span className="description">{props.desc}</span>
  </div>
  );
}

function EventCardDisplay(props) {
  let cards = [
      <EventCard 
        title="Cookout"
        time="May 16, 1960" 
        desc={
          <p>
            Theodore H. Maiman, a physicist at Hughes Research Laboratories in Malibu, Calif., 
            will construct the first laser using a cylinder of synthetic ruby 1 cm in diameter and 2 cm long, 
            with the ends silver-coated to make them reflective and able to serve as a Fabry-Perot resonator. 
          </p>
          }
        />,
        <EventCard 
        title="Anniversary"
        time="April 26, 1951" 
        desc={
          <p>
            Charles Hard Townes of Columbia University will come up with the idea for his maser 
            (microwave amplification by stimulated emission of radiation) idea while sitting on a park bench in Washington.
          </p>
          }
        />,
        <EventCard 
        title="GRB Test Fire"
        time="July 2, 1967" 
        desc={
          <p>
            The Vela 4 and Vela 3 satellites will detect a flash of gamma radiation unlike any known nuclear weapons signature, 
            which will later be identified as a Gamma Ray Burst.
          </p>
          }
        />
  ]
  const listItems = cards.map( cards => <li>{cards}</li> );
  
  return (<ul>
      {listItems}
      </ul>);
}

const Membership = () => (
  <div>
    <h2>Membership</h2>
  </div>
)

export default App;
