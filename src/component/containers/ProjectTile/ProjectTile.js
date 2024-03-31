import React from "react";
import "@styles/neonStyle.css";
import "./styles.css";
import { Link } from "gatsby";
import { Icon, TechnologyIcons } from "../..";
import { Tile } from "..";
import classcat from "classcat";

const ProjectTile = (params) => {
  const techUsed = (techs) =>
    techs.map((v, i) =>
      i > 5 ? <></> : <Icon iconSize="lg">{TechnologyIcons[v]}</Icon>,
    );

  return (
    <Link to={params.link}>
      <Tile>
        <div className="project-tile">
          <div
            style={{ textAlign: "center" }}
            className={classcat({
              "project-name": true
            })}
          >
            {params.name}
          </div>
          <div className="project-technologies">{techUsed(params.techs)}</div>
        </div>
      </Tile>
    </Link>
  );
};

export { ProjectTile };
