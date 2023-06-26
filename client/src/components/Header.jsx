import React from "react";

const Header=()=>{
return (
 <section className="kanban__header">
    <div className="kanban__header-search">
    <div className="search-icon">
      <i className="material-icons">search</i>
    </div>
    <input
      className="input-text"
      type="text"
      placeholder="Search for tasks..."
    />
  </div>
  <div className="kanban__header-info">
  <div className="mail-icon">
        <i className="material-icons">mail_outline</i>
        <div className="mail-icon__notification">No messages</div>
      </div>


  <div className="name-user">Khouloud</div>
        <div className="avatar-user">
          <img src="../../dist/images/khouloud.jpg"/>
        </div>


</div>

  </section>





)



}



export default Header