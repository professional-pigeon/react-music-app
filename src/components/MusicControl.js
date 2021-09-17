import React from 'react'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from '@testing-library/react';
import Vex from 'vexflow'


class MusicControl extends React.Component {

  vf = new Vex.Flow.Factory({renderer: {elementId: 'boo'}});
  score = this.vf.EasyScore();
  system = this.vf.System();

  render() {
    this.system.addStave({
      voices: [this.score.voice(this.score.notes('C#5/q, B4, A4, G#4'))]
    }).addClef('treble').addTimeSignature('4/4');
    let drawn = this.vf.draw

    return (
      <div>
        {drawn}
      </div>

    )
  }


}

export default MusicControl