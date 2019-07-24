import React from "react";

export default class Experience extends React.Component{
    constructor(){
        super();
        this.state = {
            isActive: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({
            isActive: true
        });
    }

    closeModal(){
        this.setState({
            isActive: false
        });
    }

    render(){
        let extra = this.state.isActive ? " is-active" : "";
        return [
            <span className="button is-link is-size-6-tablet is-size-7-mobile" onClick={this.openModal}>
                {this.props.event.tag}
            </span>,
            <div className={"modal" + extra}>
                 <div className="modal-background"></div>
                 <div className="modal-card">
                      <header className="modal-card-head">
                            <strong className="modal-card-title is-size-6-mobile">{this.props.event.tag}</strong>
                            <button className="delete" aria-label="close" onClick={this.closeModal}></button>
                      </header>
                      <section className="modal-card-body">
                          <article className="content">
                              <div className="content">{this.props.event.description}</div>
                          </article>
                      </section>
                      <footer className="modal-card-foot"/>
                </div>
           </div>
        ];
    }
}
