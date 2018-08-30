import React, { Component } from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component {
  state = {
    options: [],
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a computer',
    selectedOption: undefined,
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = option => {
    this.setState((prevState) => ({
        options: prevState.options.filter(opt => opt !== option)
      })
    );
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) this.setState(() => ({ options }));
    } catch (e) {

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('Do something before unmounting data');
  }

  handlePick = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomNum];
    this.setState(() => ({ selectedOption }));
  }

  closeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return `${option} already exists`;
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option],
    }));
  }

  render() {
    const { options, title, subtitle } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={options.length > 0} 
            handlePick={this.handlePick}
          />
          <div className="widget">
          <Options
            options={options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          /> 
          </div>            
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}