import React from "react";
import { TransitionMotion, spring } from "react-motion";
import TypeWriter from "react-typewriter";
import Swing from "react-reveal/Swing";

const leavingSpringConfig = { stiffness: 60, damping: 15 };

export default class AnimatedContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouse: [], now: "t" + 0 };
  }

  handleMouseMove = ({ clientX, clientY }) => {
    // Make sure the state is queued and not batched.
    this.setState(() => {
      return {
        mouse: [clientX - 14, clientY / 2 - 138],
        now: "t" + Date.now(),
      };
    });
  };

  handleTouchMove = (e) => {
    this.handleMouseMove(e.touches[0]);
  };

  willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    };
  };

  render() {
    const {
      mouse: [mouseX, mouseY],
      now,
    } = this.state;
    const styles =
      mouseX == null
        ? []
        : [
            {
              key: now,
              style: {
                opacity: spring(1),
                scale: spring(0),
                x: spring(mouseX),
                y: spring(mouseY),
              },
            },
          ];
    console.log(styles);
    return (
      <div id="contact" className="h-[50vh] w-screen relative">
        <TransitionMotion willLeave={this.willLeave} styles={styles}>
          {(circles) => (
            <div
              onMouseMove={this.handleMouseMove}
              onTouchMove={this.handleTouchMove}
              className="absolute inset-0 bg-transparent z-30"
            >
              {circles.map(({ key, style: { opacity, scale, x, y } }) => (
                <div
                  key={key}
                  className="absolute h-[50px] w-[50px]"
                  style={{
                    border: "1px solid lightblue",
                    borderRadius: "99px",
                    opacity: opacity,
                    scale: scale,
                    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  }}
                />
              ))}
            </div>
          )}
        </TransitionMotion>
        <div className="absolute  inset-0 bg-gray-700 z-20 text-gray-200">
          <div className="flex justify-between items-center mt-8 ml-8 md:mx-80 md:mt-20">
            <div className="">
              <TypeWriter typing={3}>
                <h2 className="font-bold text-2xl md:text-7xl">
                  Join our team
                </h2>
              </TypeWriter>
              <br />
              <TypeWriter typing={4}>
                <p className="md:text-base text-sm font-normal ">
                  We understand that our people are the key to our success. Our
                  work environment fosters collaboration, communication, and
                  information sharing. We offer state-of-the-art infrastructure,
                  including advanced network servers, modern workstations,
                  videoconferencing, teleconferencing, database analytics,
                  software testing, IT management, and business processes.
                  Verisk Nepal is an equal opportunity employer. If you’re
                  interested in joining our dynamic, collaborative team, please
                  send your resume to us.
                </p>
              </TypeWriter>
              <br className="hidden" />
              <br />
              <TypeWriter typing={3}>
                <button className="md:py-3 md:px-20 py-3 px-8 rounded-full shadow hover:text-gray-300">
                  Mail us To Day1x@gmail.com
                </button>
              </TypeWriter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
