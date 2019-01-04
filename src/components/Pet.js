import React from 'react'

class Pet extends React.Component {
  render() {

    let button;

    if (this.props.pet.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      // prevent from being called right away https://stackoverflow.com/a/37387846
      button = <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
      // button = <button  className="ui primary button">Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂'
            seems right to me. */}
            {this.props.pet.gender === 'male' ? '♂' :'♀' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}
</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {button}
        </div>
      </div>
    )
  }
}

export default Pet
