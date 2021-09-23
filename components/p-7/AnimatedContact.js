import React from "react";
import { TransitionMotion, spring } from "react-motion";

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
            <div></div>
            <div className="md:space-y-8 space-y-4">
              <h2 className="font-bold text-2xl md:text-7xl">
                Internet Identity
              </h2>
              <p className="text-base font-normal">
                Internet Identity guarantees that your data isn’t visible,
                tracked, or mined. The blockchain authentication system enables
                users to sign in to dapps on the Internet Computer and sites
                across the web anonymously and securely. Without a need for
                usernames or passwords, and backed by Chain Key cryptography,
                information can’t be viewed by anyone.
              </p>
              <button className="py-3 px-20 rounded-full shadow hover:text-gray-300">
                INTERNET IDENTITY DOCS s
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden flex-col space-y-6 items-center">
          <h2 className="font-bold text-2xl mt-8">
            STAY UP TO DATE ON ALL THINGS INTERNET COMPUTER
          </h2>
          <input
            className="h-14 w-1/4 bg-gray-500 rounded-2xl pl-6 text-gray-300 cursor-pointer z-50 pointer-events-auto"
            type="email"
            placeholder="example@__.com.np"
          />
        </div>
      </div>
    );
  }
}
