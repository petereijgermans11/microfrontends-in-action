import React from "react";
import {useParams} from 'react-router-dom';
import {outdoorEvents} from "./data";

export default function OutdoorEvent() {
    const {slug} = useParams();
    const outdoorEvent = outdoorEvents.find(outdoorEvent => outdoorEvent.slug === slug);

    return (
        <div className="my-6 px-4 mx-auto grid gap-4 grid-cols-2">
            <div>
                <img src={outdoorEvent.image} title={outdoorEvent.imageTitle} className="w-50 h-50"/>
            </div>
            <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">{outdoorEvent.title}</h1>
                <Card
                    price={outdoorEvent.price}
                    days={outdoorEvent.days}
                />
                <br/>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">Highlights</h1>
                <br/>
                <p>{outdoorEvent.description}</p>
                <br/>
                <ul class="list-disc p-4" >
                    <li>{outdoorEvent.highlight1}</li>
                    <li>{outdoorEvent.highlight2}</li>
                    <li>{outdoorEvent.highlight3}</li>
                    <li>{outdoorEvent.highlight4}</li>
                    <li>{outdoorEvent.highlight5}</li>
                    <li>{outdoorEvent.highlight6}</li>
                    <li>{outdoorEvent.highlight7}</li>
                </ul>
            </div>
        </div>
    )
}

function Card({price, days}) {
    return (
        <div className="rounded-lg shadow-2xl bg-gray-100 max-w-sm">
            <div className="p-4">
                <h2 className="text-gray-900 text-lg font-medium mb-2">{days} From: {price}</h2>
                <hr></hr>
            </div>
            <div className="p-4">
                <h1 className="text-gray-900 text-lg font-extrabold mb-2">Select Date and Travelers</h1>
                <form>
                    <div className="grid grid-cols-1 p-4">
                        <div>
                            <input type="text" name="travellers" placeholder="   YYYY-MM-DD"/>
                        </div>
                        <br/>
                        <div>
                            <input type="text" name="travellers" placeholder="   2 Adults"/>
                        </div>
                        <br/>
                        <input type="submit" value="Check Availability" className="bg-yellow-500"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
