import React from "react";
import { Link } from "react-router-dom";
import style from "./Country.module.css";

function Country(props) {
  return (
    // <div classNameName={style.container}>
    //   <Link to={`/Detail/${props.id}`}>
    //     <img src={props.img} alt="" classNameName={style.img} />
    //   </Link>
    //   <h3>Nombre: {props.name}</h3>
    //   <h3>Continente: {props.continent}</h3>
    // </div>

    <div className={style.card}>
      <svg
        className={style.img}
        // xmlns="http://www.w3.org/2000/svg"
        // xml:space="preserve"
        // width="100%"
        // height="100%"
        // version="1.1"
        // shape-rendering="geometricPrecision"
        // text-rendering="geometricPrecision"
        // image-rendering="optimizeQuality"
        // fill-rule="evenodd"
        // clip-rule="evenodd"
        // viewBox="0 0 784.37 1277.39"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <g id="_1421394342400">
            <g>
              <polygon
                fill="#343434"
                fill-rule="nonzero"
                points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
              ></polygon>
              <polygon
                fill="#8C8C8C"
                fill-rule="nonzero"
                points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
              ></polygon>
              <polygon
                fill="#3C3C3B"
                fill-rule="nonzero"
                points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
              ></polygon>
              <polygon
                fill="#8C8C8C"
                fill-rule="nonzero"
                points="392.07,1277.38 392.07,956.52 -0,724.89"
              ></polygon>
              <polygon
                fill="#141414"
                fill-rule="nonzero"
                points="392.07,882.29 784.13,650.54 392.07,472.33"
              ></polygon>
              <polygon
                fill="#393939"
                fill-rule="nonzero"
                points="0,650.54 392.07,882.29 392.07,472.33"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
      <div className={style.textBox}>
        {" "}
        <p className="text head">Ethereum</p>
        <span>Cryptocurrency</span>
        <p className={style.text_price}>1.654,34€</p>
      </div>
    </div>
  );
}

export default Country;
