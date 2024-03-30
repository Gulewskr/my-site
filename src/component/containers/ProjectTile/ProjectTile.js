import React, { useState } from "react";
import "../../../styles/neonStyle.css";
import "./styles.css";
import { Link } from "gatsby";
import { Icon, TechnologyIcons } from "../..";
import { Tile } from "..";

const ProjectTile = (params) => {
  const [f, setF] = useState(false);

  const techUsed = (techs) =>
    techs.map((v, i) =>
      i > 5 ? <></> : <Icon iconSize="lg">{TechnologyIcons[v]}</Icon>,
    );

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

export { ProjectTile };
