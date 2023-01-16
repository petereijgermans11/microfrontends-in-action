import React from "react";
import {useParams} from 'react-router-dom';
import { outdoorEvents } from "./data";

export default function OutdoorEvent() {
  const { slug } = useParams();
  const outdoorEvent = outdoorEvents.find(outdoorEvent => outdoorEvent.slug === slug);

  return (
    <div className="my-6 px-4 mx-auto grid gap-4 grid-cols-2">
      <div>
        <img src={outdoorEvent.image} title={outdoorEvent.imageTitle} className="w-50 h-50" />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">{outdoorEvent.title}</h1>
        <p>{outdoorEvent.description}</p>
      </div>
    </div>
  )
}
