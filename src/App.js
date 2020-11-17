import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './styles/main.css';
import {
    Navbar,
    Hero,
    Container,
    Heading,
    Columns,
    Image,
    Level,
    Section,
    Icon,
    Form,
    Footer,
    Button
} from 'react-bulma-components';
const { Input, Field, Control, Label, Textarea } = Form;
// import NavBar from "./components/NavBar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInicialState();
    }
    state = {
        active: false,
        name: '',
        email: '',
        message: ''
    }

    getInicialState = () => {
        const inicialState = {
            active: false
        };
        return inicialState;
    };

    //setInputs
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };

    toggleActive = () => {
        this.setState({
            active: !this.state.active,
        });
    };
    render() {
        return (
            <>
                <Navbar
                    transparent={true}
                    active={this.state.active}>
                    <Container>
                        <Navbar.Brand>
                            <a className="is-vertically-centered active" href="https://acwebs.github.io/me">
                                <img src="favicon-192x192.png" alt="logo" className="logo" />
                            </a>
                            <Navbar.Burger />
                        </Navbar.Brand>
                        <Navbar.Menu>
                            <Navbar.Container position="end">
                                <Navbar.Item href="#about">
                                    About
                                </Navbar.Item>
                                <Navbar.Item href="#skills">
                                    Skills
                                </Navbar.Item>
                                <Navbar.Item href="#projects">
                                    Projects
                                </Navbar.Item>
                                <Navbar.Item href="#contact">
                                    Contact
                                </Navbar.Item>
                            </Navbar.Container>
                        </Navbar.Menu>
                    </Container>
                </Navbar>
                <Hero color="white" className="has-text-centered" size="fullheight">
                    <Hero.Body>
                        <Container>
                            <Columns className="is-centered">
                                <Columns.Column>
                                    <Heading className="is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Full stack JS Developer and Web Designer</Heading>
                                    <Heading subtitle className="is-size-4-desktop">I love developing and designing things for people</Heading>
                                    <Level>
                                        <Level.Item textAlignment="centered">
                                            <Image className="hero-img" src="hero.svg"></Image>
                                        </Level.Item>
                                    </Level>
                                </Columns.Column>
                            </Columns>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Section className="is-primary is-medium is-long has-text-centered" id="about">
                    <Container>
                        <Columns className="is-centered">
                            <Columns.Column className="is-three-fifths">
                                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">A little about Andrés, me</h1>
                                <h2 className="subtitle is-size-5-mobile">I started my journey as a programmer in highschool in 2006, after that I have always love the web and I really love to build web and mobile app. I have had the opportunity to build some websites for friends work in the backend for AI companies and build mobile apps for others. I really enjoy learning new things and I love interesting projects. </h2>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
                <Section className="skills has-text-centered" id="skills">
                    <Container className="is-narrow">
                        <div className="box">
                            <Columns className="is-centered">
                                <Columns.Column>
                                    <Icon>
                                        <span className="fas fa-laptop-code fa-3x is-primary-color"></span>
                                    </Icon>
                                    <h1 className="title is-size-4 is-spaced">
                                        Website Development
                                    </h1>
                                    <p>Websites help people to identify other people's businesses or skills. I enjoy helping people put their value on the web.</p>
                                    <div className="icon-section">
                                        <Icon>
                                            <span className="fab fa-html5 fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fab fa-js fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fab fa-php fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fab fa-css3-alt fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fab fa-bootstrap fa-lg"></span>
                                        </Icon>
                                    </div>
                                </Columns.Column>
                                <Columns.Column>
                                    <Icon>
                                        <span className="fas fa-mobile fa-3x is-primary-color"></span>
                                    </Icon>
                                    <h1 className="title is-size-4 is-spaced">
                                        App Developent
                                    </h1>
                                    <p>I have had the opportunity to help build multiple mobile and web apps with some of the technologies listed below and some more. </p>
                                    <div className="icon-section">
                                        <Icon>
                                            <span className="fab fa-react fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fab fa-vuejs fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fab fa-github fa-lg"></span>
                                        </Icon>
                                    </div>
                                </Columns.Column>
                                <Columns.Column>
                                    <Icon>
                                        <span className="fas fa-server fa-3x is-primary-color"></span>
                                    </Icon>
                                    <h1 className="title is-size-4 is-spaced">
                                        Server
                                    </h1>
                                    <p>In the websites or apps before mentioned, I had the opportunity to use some server side technologies and learn how to use some of its features.</p>
                                    <div className="icon-section">
                                        <Icon>
                                            <span className="fab fa-node fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fab fa-aws fa-lg"></span>
                                        </Icon>
                                        <Icon>
                                            <span className="fas fa-terminal fa-lg"></span>
                                        </Icon>
                                    </div>
                                </Columns.Column>
                            </Columns>
                        </div>
                    </Container>
                </Section>
                <Section className="projects is-medium has-text-centered" color="white" id="projects">
                    <Container className="is-narrow">
                        <Heading className="is-spaced is-size-3-desktop is-size-4-mobile">Projects</Heading>
                        <Heading subtitle className="is-size-5-desktop">Some projects that I have worked on</Heading>
                        <Container className="projects-grid">
                            <Columns className="is-centered is-multline is-mobile">
                                <Columns.Column className="is-12-mobile is-half-tablet is-one-third-desktop">
                                    <figure className="image is-3by2">
                                        <img className="project-thumb" alt="" src="img/flexvertical.png" />
                                        <figcaption>
                                            <h1 className="title is-size-5 is-size-4-widescreen">Web tracking app</h1>
                                            <a className="button is-primary is-outlined is-rounded" href="https://andrescordobam.github.io/me" target="_blank" rel="noreferrer">
                                                <span>Visit Website</span>
                                                <span className="icon">
                                                    <svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                                                        <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                    </svg>
                                                    <i className="fas fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </figcaption>
                                        <div className="overlay"></div>
                                    </figure>
                                </Columns.Column>
                                <Columns.Column className="is-12-mobile is-half-tablet is-one-third-desktop">
                                    <figure className="image is-3by2">
                                        <img className="project-thumb" alt="" src="img/ifix2.png" width="432" height="288" />
                                        <figcaption>
                                            <h1 className="title is-size-5 is-size-4-widescreen">Website to schedule fixing of your phone</h1>
                                            <a className="button is-primary is-outlined is-rounded" href="https://andrescordobam.github.io/me" target="_blank" rel="noreferrer">
                                                <span>Visit Website</span>
                                                <span className="icon">
                                                    <svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                                                        <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                    </svg>
                                                    <i className="fas fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </figcaption>
                                        <div className="overlay"></div>
                                    </figure>
                                </Columns.Column>
                                <Columns.Column className="is-12-mobile is-half-tablet is-one-third-desktop">
                                    <figure className="image is-3by2">
                                        <img className="project-thumb" alt="" src="img/mobileapp.png" />
                                        <figcaption>
                                            <h1 className="title is-size-5 is-size-4-widescreen">Mobile app to read tickets and sync it with server</h1>
                                            <a className="button is-primary is-outlined is-rounded" href="https://andrescordobam.github.io/me" target="_blank" rel="noreferrer">
                                                <span>Visit Website</span>
                                                <span className="icon">
                                                    <svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                                                        <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                    </svg>
                                                    <i className="fas fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </figcaption>
                                        <div className="overlay"></div>
                                    </figure>
                                </Columns.Column>
                            </Columns>
                        </Container>
                    </Container>
                </Section>
                <Section className="contact is-primary is-medium has-text-centered" id="contact">
                    <Container className="is-narrow">
                        <Heading className="is-spaced is-size-3-desktop is-size-4-mobile">Say Hello</Heading>
                        <Heading subtitle className="is-size-4-desktop">You can send your greetings or you can contact me for a project</Heading>
                        <div className="box">
                            <div className="form">
                                <Columns className="is-centered">
                                    <Columns.Column className="is-three-fifths">
                                    </Columns.Column>
                                </Columns>
                                <Columns className="is-centered">
                                    <Columns.Column className="is-half">
                                        <Field>
                                            <Label>Name</Label>
                                            <Control>
                                                <Input 
                                                    placeholder="Name" 
                                                    name="name" 
                                                    onChange={this.handleChange}
                                                    value={this.state.name} 
                                                />
                                            </Control>
                                        </Field>
                                    </Columns.Column>
                                    <Columns.Column className="is-half">
                                        <Field>
                                            <Label>Email</Label>
                                            <Control>
                                                <Input 
                                                    placeholder="Email" 
                                                    name="email" 
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                />
                                            </Control>
                                        </Field>
                                    </Columns.Column>
                                </Columns>
                                <Columns className="is-centered">
                                    <Columns.Column className="">
                                        <Field>
                                            <Label>Message</Label>
                                            <Control>
                                                <Textarea 
                                                    placeholder="Leave a message" 
                                                    name="message" 
                                                    className="has-fixed-size" 
                                                    onChange={this.handleChange}
                                                    value={this.state.message}
                                                />
                                            </Control>
                                        </Field>
                                    </Columns.Column>
                                </Columns>
                                <Columns className="is-centered">
                                    <Columns.Column className="is-one-third">
                                        <Field>
                                            <Control>
                                                <Button className="is-medium is-primary is-fullwidth is-outlined" rounded={true}>Submit</Button>
                                            </Control>
                                        </Field>
                                    </Columns.Column>
                                </Columns>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Footer className="">
                    <Container className="">
                        <Level className="icon-section">
                            <Level.Item textAlignment="centered">
                                <Button className="is-small is-rounded">
                                    <Icon className="is-small">
                                        <span className="fab fa-twitter fa-3x is-primary-color"></span>
                                    </Icon>
                                </Button>
                                <Button className="is-small is-rounded">
                                    <Icon className="is-small">
                                        <span className="fab fa-linkedin-in fa-3x is-primary-color"></span>
                                    </Icon>
                                </Button>
                                <Button className="is-small is-rounded">
                                    <Icon className="is-small">
                                        <span className="fab fa-github fa-3x is-primary-color"></span>
                                    </Icon>
                                </Button>
                            </Level.Item>
                        </Level>
                        <Level className="text-section">
                            <Level.Item textAlignment="centered">
                                <p>Coded by Andrés Córdoba &copy; 2020.</p>
                            </Level.Item>
                        </Level>
                    </Container>
                </Footer>
            </>
        );
    }
}

export default App;
