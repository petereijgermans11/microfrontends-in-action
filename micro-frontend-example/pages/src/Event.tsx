import React from "react";
import {useParams} from 'react-router-dom';
import { outdoorEventsNepal } from "./data";

export default function Recipe() {
  const { slug } = useParams();
  const recipe = outdoorEventsNepal.find(recipe => recipe.slug === slug);

  return (
    <div className="my-6 px-4 mx-auto grid gap-4 grid-cols-2">
      <div>
        <img src={recipe.image} title={recipe.imageTitle} className="w-50 h-50" />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">{recipe.title}</h1>
        <p>{recipe.description}</p>
      </div>
    </div>
  )
}
