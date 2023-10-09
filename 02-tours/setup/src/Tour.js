import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readmore, setReadMore] = useState(false)
  return (
    <article className='single tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name} </h4>
          <h4 className='tour-price'>${price} </h4>
        </div>
        <p>{readmore ? info : `${info.substring(0, 300)}...`
        } <button onClick={() => setReadMore(!readmore)}>
            {readmore ? 'show less' : 'read more'}
        </button>
        </p>
        <button className='delete-btn' onClick={()=> removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
