import './self-introduction.css';

export default function SelfIntroduction() {
  return (
    <>
      <div className="picture">
        <img
          src="me.jpeg"
          alt="my picture"
        />
      </div>
      <div className="intro-text">
        <h2>
          Hi
          <img
            src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
            alt="waving"
            loading="lazy"
            className="waving"
          />
          , I'm Omar, a Bachelor Software Development Student learning various
          technologies!
        </h2>
        <p className="into-paragraph">
          I'm a huge fan of the Web Development and I love to learn new
          technologies. I'm currently learning React, Node.js, and TypeScript.
          I'm also learning Python, Java, and C++. Networking and Hardware
          communication are a big part of my interests. I'm also a big fan of
          the Linux and Open Source.
        </p>
      </div>
    </>
  );
}
