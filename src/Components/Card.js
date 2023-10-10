import React, { useState } from "react";

const Card = ({ id, name, info, image, price, removeData }) => {
  const [readmore, setReadmore] = useState(true);

  return (
    <>
      <div className="single_item_con">
        <div className="image">
          <img src={image} alt="" />
          <p className="price">{price}</p>
        </div>
        <div className="item_desc_con">
          <p className="desc_title">{name}</p>
          <div className="desc_main">
            <p className="desc">
              {readmore ? `${info.substring(0, 150)}...` : info}

              <button
                className="read_more"
                onClick={() => setReadmore(!readmore)}
              >
                {readmore ? "read more" : "show less"}
              </button>
            </p>
            <button className="not_interested" onClick={() => removeData(id)}>
              not interested
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
