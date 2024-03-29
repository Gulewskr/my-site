import React, { useState } from "react";
import "../../styles/neonStyle.css";
import "./styles.css";
import { Link } from "gatsby";
import { TechnologyIcons } from "..";
import { createShourtcut } from "../../scripts/utils";
import { Tile } from '.';
//import { Styles } from '../../styles/neonStyles'

const NeonProjectWindow = (params) => {
  const [f, setF] = useState(false);

  const techUsed = (techs) =>
    techs.map((v, i) => (i > 5 ? <></> : <div>{TechnologyIcons[v]()}</div>));

  return (
    <Link to={params.link}>
      <Tile>
        <div
          style={{ textAlign: "center" }}
          className={f ? "text-neon-on" : "text-neon"}
        >
          {params.name}
        </div>
        <div className="prjct-techs">{techUsed(params.techs)}</div>
      </Tile>
    </Link>
  );
};

export { NeonProjectWindow };
