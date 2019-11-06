import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import image1 from './img/unibuddy.gif';
import image2 from './img/mb.gif';
import image3 from './img/clicky.gif';
import './style.css';

// const root = document.querySelector("#root");

// // Styles
// const bodyStyles = {
//     // background: "-webkit-gradient(linear, left top, right top, color-stop(0%, transparent), color-stop(50%,red), color-stop(100%,transparent))",
//     // background: "-webkit-linear-gradient(left, transparent 0%,red 50%,transparent 100%)", /* Chrome10+, Safari5.1+ */
//     // background: "-moz-linear-gradient(left, transparent 0%,red 50%,transparent 100%)",    /* FF3.6+ */
//     // background: "linear-gradient(to bottom right,#ff5555 40%,#5555ff 100%)",
//     width: "100%",
//     height: "100vh",
//     overflowX: "hidden"
// }
// const headerStyles = {
//     textAlign: "center",
//     color: "#fff",
// }
// const cardContainerStyles = {
//     width: "300px",
//     height: "500px",
//     background: "#fff",
//     borderRadius: 35,
//     boxShadow: "1px 1px 35px #444"
// };
// const imgContainerStyles = {
//     backgroundColor: "#fff",
//     height: "35%",
//     margin: 0,
//     borderTopRightRadius: 35,
//     borderTopLeftRadius: 35,
//     background: "#444",
//     backgroundSize: "cover"
// }
// const avatarContainerStyles = {
//     width: "150px",
//     height: "150px",
//     zIndex: "9",
//     position: "relative",
//     top: "-85px",
//     left: "65px",
//     right: "0",
//     margin: "0 auto",
//     border: "10px solid #fff",
//     background: "#000",
//     backgroundSize: "cover",
//     display: "inline-block",
//     textAlign: "center",
//     borderRadius: "50%"
// };
// const titleStyles = {
//     color: "#555",
//     fontWeight: "100",
//     outline: "none",
//     margin: "0px",
//     display: "inline-block",
//     width: "100%",
//     textAlign: "center",
//     position: "relative",
//     top: "-75px"
// };
// const subTitleStyles = {
//     position: "relative",
//     top: "-95px",
//     textAlign: "center",
//     fontWeight: "100",
//     color: "#888"
// };
// const bioContainerStyles = {
//     position: "relative",
//     top: "-95px"
// };
// const bioStyles = {
//     color: "#444",
//     padding: "0 30px",
//     textAlign: "center"
// };
// const iconsContainerStyles = {
//     position: "relative",
//     top: "-85px",
//     textAlign: "center"
// }
// const iconStyles = {
//     margin: "0 10px",
//     color: "#5C6BC0",
//     fontSize: "24px"
// }
// const cardBackStyles = {
//     height: 500,
//     width: 300,
//     position: "absolute",
//     top: "0",
//     bottom: "0",
//     left: "0",
//     right: "0",
//     margin: "auto",
//     borderRadius: "35px",
//     boxShadow: "1px 1px 35px #444",
//     background: "')",
//     backgroundSize: "cover",
//     backgroundPosition: "right"
// }
// const madeByStyles = {
//     color: "#fff",
//     opacity: ".5",
//     textAlign: "center",
//     padding: "0px"
// }

// const imgStyles = {
//     width: 300,
//     borderTopRightRadius: 35,
//     borderTopLeftRadius: 35
// }

// const avatarImgStyles = {
//     width: "100%",
//     position: "absolute",
//     top: "0",
//     bottom: "0",
//     left: "0",
//     right: "0",
//     margin: "auto",
//     borderRadius: "50%"
// }

// const cardBackImgStyles = {
//     height: "100%",
//     width: "100%",
//     borderRadius: 35,
//     position: "absolute"

// }

// // Components
// class CardImg extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={imgContainerStyles} className="imgContainer">
//                 <img src={this.props.imgSrc} className="img" style={imgStyles} />
//             </div>
//         )
//     }
// }
// class CardAvatar extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={avatarContainerStyles} className="infoContainer">
//                 <img src={this.props.avatarSrc} style={avatarImgStyles} />
//             </div>
//         )
//     }
// }
// class CardTitle extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className="titleDiv">
//                 <h1 id={this.props.targetId} style={titleStyles} className="title">{this.props.title}</h1>
//                 <h4 style={subTitleStyles} className="subTitle">{this.props.subTitle}</h4>
//             </div>
//         )
//     }
// }
// class CardBio extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={bioContainerStyles} className="bioContainer">
//                 <p style={bioStyles} className="bio">{this.props.bio}</p>
//             </div>
//         )
//     }
// }
// class CardSocialIcons extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={iconsContainerStyles} className="iconContainer">
//                 <span style={iconStyles} className="icons"><i class="fab fa-facebook-square"></i></span>
//                 <span style={iconStyles} className="icons"><i class="fab fa-youtube-square"></i></span>
//                 <span style={iconStyles} className="icons"><i class="fab fa-twitter-square"></i></span>
//             </div>
//         )
//     }
// }
// class CardBack extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={cardBackStyles} className="cardBack">
//             </div>
//         )
//     }
// }

// class Card extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "Jake Sully",
//             subTitle: "@Na'vi_4_Lyf",
//             bio: "Sick of doctors telling me what I couldn't do. I was a marine. A warrior... of the uh... Jarhead Clan. My cup is empty.",
//             direction: "forwards"
//         }
//     }
//     componentWillMount() {
//         if (this.props.type == "wick") {
//             this.setState({
//                 title: "John Wick",
//                 subTitle: "@HighOctane",
//                 bio: "People keep asking if I'm back and I haven't really had an answer. But now, yeah, I'm thinkin' I'm back."
//             });
//         } else if (this.props.type == "groot") {
//             this.setState({
//                 title: "Groot",
//                 subTitle: "@iAmGroot",
//                 bio: "I am Groot. I am Groot... I am Groot, I am Groot, I am Groot I am Groot. I am Groot. I am Groot. I am Groot."
//             })
//         } else if (this.props.type == "hitgirl") {
//             this.setState({
//                 title: "Mindy Mcready",
//                 subTitle: "@HitGirl",
//                 bio: "I can't see through walls but I can kick your ass. I think some tasers look gay. Robin wishes he was me."
//             })
//         }
//     }
//     render() {

//         return (
//             <div className="flipperContainer">
//                 <div className="flipper">
//                     <div style={cardContainerStyles} className="cardFront cardContainer">
//                         <CardImg imgSrc={this.props.imgSrc} />
//                         <CardAvatar avatarSrc={this.props.avatarSrc} />
//                         <CardTitle targetId={this.props.targetId} title={this.state.title} subTitle={this.state.subTitle} />
//                         <CardBio bio={this.state.bio} />
//                         <CardSocialIcons />
//                     </div>
//                     <div style={cardBackStyles} className="cardBack">
//                         <img className="cardBackImg" style={cardBackImgStyles} src={this.props.cardBackImgSrc} />
//                         <p style={madeByStyles} >@AdamTheWizard</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// class CardContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={bodyStyles} className="body">
//                 <div className="flex">

//                     <Card imgSrc="http://1.bp.blogspot.com/-tso_pF4jEdU/UPC4zDXEY6I/AAAAAAAAAhE/Vb2Cd8nRZEo/s1600/a.jpg" avatarSrc="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-avatar-sam-worthington.jpg" cardBackImgSrc="https://i.pinimg.com/564x/1e/7e/4d/1e7e4d11c01e57f32410ece8c1961646.jpg" targetId="navi" />

//                     <Card type="wick" imgSrc="https://orig00.deviantart.net/db12/f/2012/038/5/0/blood_splatter_background_by_pudgey77-d4ozy89.jpg" avatarSrc="https://d3c1jucybpy4ua.cloudfront.net/data/35521/big_picture/John_Wick.jpg?1428558984" cardBackImgSrc="https://i.pinimg.com/736x/b1/2d/9f/b12d9f259a178fc9dc7bfb6447be7a1c.jpg" />

//                     <Card type="groot" imgSrc="https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/174849.jpg" avatarSrc="https://i.pinimg.com/originals/74/4d/b3/744db3fd9842133829be6e0182c3d62d.jpg" cardBackImgSrc="https://pre00.deviantart.net/0274/th/pre/i/2014/357/0/d/guardians_of_the_galaxy___groot_poster__acrylic__by_cybergal2013-d8aydlf.jpg" />

//                     <Card type="hitgirl" imgSrc="https://media.giphy.com/media/Y6pDMTysYTQ2I/giphy.gif" avatarSrc="https://66.media.tumblr.com/dcf6558ccad075ce4cca03cc1d972f97/tumblr_phhrt8PrRE1tc5gvpo4_250.png" cardBackImgSrc="https://i.pinimg.com/564x/22/f1/3e/22f13ea035bc11beeeb1349550fb3170.jpg" />
//                 </div>
//             </div>
//         )
//     }
// }

// export default CardContainer;

// class Project1 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Card key={this.props.key} style={{ width: '18rem' }}>
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//                         </Card.Text>
//                         <Card.Link href="#">Card Link</Card.Link>
//                         <Card.Link href="#">Another Link</Card.Link>
//                     </Card.Body>
//                 </Card>
//             </div>
//         )
//     }
// }

// class Project1 extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isFlipped: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(e) {
//         e.preventDefault();
//         this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//     }
//     render() {
//         return (
//             <div>
//                 <Card key={this.props.key} style={{ width: '18rem' }}>
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//                         </Card.Text>
//                         <Card.Link href="#">Card Link</Card.Link>
//                         <Card.Link href="#">Another Link</Card.Link>
//                         <button onClick={this.handleClick}>Click to flip</button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         )
//     }
// }

// class Project2 extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isFlipped: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(e) {
//         e.preventDefault();
//         this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//     }
//     render() {
//         return (
//             <div>
//                 <Card key={this.props.key} style={{ width: '18rem' }}>
//                     <Card.Body>
//                         <Card.Title>Back</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//                         </Card.Text>
//                         <Card.Link href="#">Card Link</Card.Link>
//                         <Card.Link href="#">Another Link</Card.Link>
//                         <button onClick={this.handleClick}>Click to flip</button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         )
//     }
// }

// class Image1 extends React.Component {
//     render() {
//         return (
//             <img key={this.props.key} src="http://images.clipartpanda.com/apple-20clip-20art-nicubunu_Apple_Clipart_Free.png" />
//         )
//     }
// }

class Projects1 extends React.Component {
    render() {
        return (
            <div>
                <div id="projectsection">My Work</div>
                <div id="projectsContainer">
                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image1}></Card.Img>
                            <Card.Title>UniBuddy</Card.Title>
                            <Card.Link href="https://sanies93.github.io/uniBuddy/" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image2}></Card.Img>
                            <Card.Title>Magic Bingo</Card.Title>
                            <Card.Link href="https://salty-beach-85906.herokuapp.com/game" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image3}></Card.Img>
                            <Card.Title>Clicky Game</Card.Title>
                            <Card.Link href="https://aqueous-oasis-71382.herokuapp.com/" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Projects1;