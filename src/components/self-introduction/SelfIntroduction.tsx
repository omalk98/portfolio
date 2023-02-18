import {
  Web,
  OpenCV,
  Python,
  Java,
  Javascript,
  Typescript,
  CPP,
  C,
  Linux,
  Network,
  Hardware,
  React,
  NodeJS,
  Ubuntu,
  PopOS,
  Go,
  Rust
} from '../../assets/Icons';
import './self-introduction.css';

export default function SelfIntroduction() {
  return (
    <>
      <div className="intro-picture">
        <img
          src="images/me.jpeg"
          alt="my picture"
          loading="lazy"
        />
      </div>
      <div className="intro-text">
        <h2>
          Hi
          <img
            src="images/waving.gif"
            alt="waving"
            loading="lazy"
            className="waving"
          />
          , I'm Omar, a Bachelor Software Development Student learning various
          technologies!
        </h2>
        <h3>A Little About Myself</h3>
        <p className="intro-paragraph">
          Web Development <Web title="Web Dev" /> is my bread and butter and I
          love to learn new technologies. I'm currently expanding my knowledge
          in React <React title="React" />, Node.js <NodeJS title="Node.js" />,
          and JavaScript <Javascript title="JavaScript" /> / TypeScript
          <Typescript title="TypeScript" />.
          <br />
          <br />
          I'm also learning Python <Python title="Python" /> and OpenCV
          <OpenCV title="OpenCV" />. I love automation, and it absolutely amazes
          me how powerful computer vision software has become. As of now, Python
          will do, but I'm keen on improving my knowledge and moving over to C++
          for CV. I'm eager to develop useful CV tools as I learn and develop my
          skills, and keep improving my automation skills in Python as I go.
          <br />
          <br />
          Java <Java title="Java" /> is my favorite OOP language for robust
          application and server development. Hoping to learn GO
          <Go title="Go" />
          <br />
          <br />
          C <C title="C Language" /> &amp; C++ <CPP title="C++" /> are my
          favorite languages for Networking <Network title="Networking" /> and
          Hardware <Hardware title="Hardware" /> communication. Hoping to learn
          Rust <Rust title="Rust" />
          <br />
          <br />
          I'm also a big fan of Linux <Linux title="Linux" /> and Open Source.
          As my daily driver, I use an Ubuntu <Ubuntu title="Ubuntu" />
          derivative called Pop!_OS <PopOS title="Pop!_OS" />.
        </p>
      </div>
    </>
  );
}
