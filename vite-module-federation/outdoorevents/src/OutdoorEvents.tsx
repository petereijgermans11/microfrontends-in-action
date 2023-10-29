
import { Link } from "react-router-dom";
import { outdoorEvents } from "./data";
import './index.scss';

export default function OutdoorEvents() {
  return (
    <div className="my-4 px-4 text-center">
      <div>
        <div className="float-left w">
          Search: <input className="text-black-600 border-4" />
        </div>
        <div>
          <h1 className="text-4xl"><strong>Outdoor Events . . . .</strong></h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {outdoorEvents.map(event => (
          <Card
            key={event.slug}
            title={event.title}
            slug={event.slug}
            description={event.description}
            image={event.image}
            imageTitle={event.imageTitle}
            price={event.price}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ title, slug, description, image, imageTitle, price }) {
  
  const increment = () => {
    const action = {
      detail: { action: 'increment' },
    };
    const event = new CustomEvent('ADD_TO_CART', action);
    document.dispatchEvent(event);
  };

  return (
    <div className="card">
      <Link to={`/outdoorEvents/${slug}`}>
        <img title={imageTitle} src={image} alt={title} />
      </Link>
      <div className="p-6">
        <h2 className="title-price">{title} <strong>{price}</strong></h2>
        <p className="text-gray-700">{description}</p>
        <Link to={`/outdoorEvents/${slug}`} className="book-or-add-to-cart">Book event</Link>
        <br/><br/>
        <button className="book-or-add-to-cart" onClick={increment}>Add to Cart</button>
      </div>
    </div>
  );
}
