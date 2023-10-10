import React from "react";

import Card from "./Card";
const Main = ({ tours, removeData }) => {
  return (
    <section className="display_items">
      <h2 className="section_title">
        our tours <span className="underline"></span>
      </h2>
      <article className="item_container">
        {tours.map((data) => (
          <Card {...data} key={data.id} removeData={removeData} />
        ))}
      </article>
    </section>
  );
};

export default Main;
