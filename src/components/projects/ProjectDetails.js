import React from "react";

const ProjectDetails = (props) => {
   
    const id = props.match.params.id
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-deph-0">
          <div className="card-content" />
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque consectetur reprehenderit rerum minima necessitatibus illo inventore eius, voluptates odit quisquam! Atque, culpa quam. Numquam est alias ipsum deleniti ratione.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by KS</div>
            <div>4 february , 12am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
