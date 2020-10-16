import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../images/Local.svg";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanage-map.css";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  console.log(orphanages)

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    });
  }, [])

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
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_VAR_MAPBOX}`} />
        
        {
          orphanages.map(orphanage => {
            return (
              <Marker 
                icon={mapIcon}
                position={[-27.2092052, -49.6401092]}
                key={orphanage.id}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                  Lar das Meninas
                  <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight color="#fff" size={20} />
                  </Link>
                </Popup>
              </Marker>
            )
          })
        }

      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
