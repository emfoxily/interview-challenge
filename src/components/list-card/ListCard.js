import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

import './ListCard.scss';

class ListCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: "",
      items: ["item", "item", "item"]
    }
  }
  render() {
    return (
      <Base>
        <div class="list-card">
          <h1>
            {this.props.header}
          </h1>
          <ul>
            {
              this.props.items.map(function(item) {
                return <li>{item}</li>
              })
            }
          </ul>
        </div>
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
};

ListCard.defaultProps = {
};

export default ListCard;
