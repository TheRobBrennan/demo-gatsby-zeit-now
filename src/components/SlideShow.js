import React, { PureComponent } from 'react';

export default class SlideShow extends PureComponent {
  constructor () {
    super();
    this.state = {
      pos: 0,
      lastPos: 0,
      intervalId: undefined,
      timeout: undefined,
    };
    this.rotateSlide = this.rotateSlide.bind(this);
  }

  rotateSlide () {
    const { settings } = this.props;
    const intervalId = setInterval(() => {
      let { pos, lastPos } = this.state;
      lastPos = pos;
      pos++;

      if (pos >= settings.images.length) {
        pos = 0;
      }

      // Hide last image after a short delay.
      const timeout = setTimeout(() => {
        lastPos = pos;
        this.setState({ lastPos });
      }, settings.delay / 2);

      this.setState({ lastPos, pos, timeout });
    }, settings.delay);

    // Track the interval we are setting to prevent against memory leaks
    this.setState({ intervalId });
  }
  componentDidMount () {
    this.rotateSlide();
  }
  componentWillUnmount () {
    clearInterval(this.state.intervalId);
    clearTimeout(this.state.timeout);
  }
  render () {
    const { pos, lastPos } = this.state;
    const { settings } = this.props;

    return (
      <div id='bg'>
        {settings.images.map((image, i) => {
          return (
            <div
              key={image['src']}
              style={{
                backgroundPosition: image['position'],
                backgroundImage: `url("${image['src']}")`,
              }}
              className={
                i === pos ? 'visible top' : i === lastPos ? 'visible' : ''
              }
            />
          );
        })}
        ;
      </div>
    );
  }
}
