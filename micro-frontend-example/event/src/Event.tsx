import React from "react";
import {useParams} from 'react-router-dom';
import { outdoorEvents } from "./data";

export default function Event() {
  const { slug } = useParams();
  const event = outdoorEvents.find(event => event.slug === slug);

  return (
    <div className="my-6 px-4 mx-auto grid gap-4 grid-cols-2">
      <div>
        <img src={event.image} title={event.imageTitle} className="w-50 h-50" />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">{event.title}</h1>
        <p>{event.description}</p>
      </div>
    </div>
  )
}
