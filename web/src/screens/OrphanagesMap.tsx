import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "../styles/pages/orphanage-map.css";
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from "../images/Local.svg";

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p> Muitas crianças estao esperando vc@ </p>
        </header>
        <footer>
          <strong> São Paulo </strong>
          <span> São Paulo </span>
        </footer>
      </aside>
      <Map
        center={[-27.2092052, -49.6401092]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_VAR_MAPBOX}`} /> */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
