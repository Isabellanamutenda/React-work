import React, { PureComponent } from 'react';

class Home extends PureComponent {
  render() {
    return (
      <div className="about">
        <h2>Welcome to our page</h2>
        <p>
          Pascaline, also called Arithmetic Machine,
          the first calculator or adding machine to be produced in any quantity and actually used
          The Pascaline was designed and built by the French mathematician-philosopher
          Blaise Pascal between 1642 and 1644.
          It could only do addition and subtraction,
          Pascal invented the machine for his father, a tax collector, so it was the first business
          machine too (if one does not count the abacus).
          He built 50 of them over the next 10 years.
        </p>
        <p>
          Difference Engine, an early calculating machine, verging on being the first computer,
          designed and partially built during the 1820s and ’30s by Charles Babbage.
          Babbage was an English mathematician and inventor; he invented the cowcatcher,
          reformed the British postal system, and was a pioneer in the fields of operations
          research and actuarial science.
        </p>
      </div>
    );
  }
}

export default Home;
