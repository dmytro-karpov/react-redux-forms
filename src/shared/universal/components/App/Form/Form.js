/* @flow */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import './form.css';
import ContactForm from './ContactForm';


class Form extends Component {
  constructor(props) {
    super(props);

    this.handleClick = ::this.handleClick;
    this.handleSubmit = ::this.handleSubmit;
  }

  handleClick(event) {
    console.log('menu.click', event.target);
  }

  handleSubmit(formData) {
    console.log('form.submit', formData);
  }

  render() {
    return (
      <section className="form-page">
        <Helmet title="Form" />

        <Menu className="pt-elevation-1">
          <MenuItem
            iconName="new-text-box"
            onClick={this.handleClick}
            text="New text box"
          />
          <MenuItem
            iconName="new-object"
            onClick={this.handleClick}
            text="New object"
          />
          <MenuItem
            iconName="new-link"
            onClick={this.handleClick}
            text="New link"
          />
          <MenuDivider />
          <MenuItem text="Settings..." iconName="cog" />
        </Menu>

        <hr />

        <ContactForm onSubmit={this.handleSubmit} />
      </section>
    );
  }
}

export default Form;
