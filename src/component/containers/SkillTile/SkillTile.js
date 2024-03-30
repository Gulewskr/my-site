import React from "react";
import "./styles.css";
import { createShourtcut } from "../../../scripts/utils";
import { Tile } from "..";
import { Icon } from "../..";

import StarIconBlue from "../../../images/icons/star_blue.svg";
import StarIconGray from "../../../images/icons/star_disabled.svg";

/**
 * @type {(params: {
 * name: string,
 * icon: JSX.Element,
 * cb: () => void
 * }) => JSX.Element}
 */
const SkillTile = (params) => {
  const StarsLvl = (lvl) => {
    return [1, 2, 3, 4, 5].map((v) => {
      const fillStar = lvl > 0;
      lvl--;
      return fillStar ? (
        <div className="skilltile-star">
          <Icon>
            <StarIconBlue />
            {v === 5 && <span class="questionmark-icon"></span>}
          </Icon>
        </div>
      ) : (
        <div className="skilltile-star">
          <Icon>
            <StarIconGray />
            {v === 5 && <span class="questionmark-icon"></span>}
          </Icon>
        </div>
      );
    });
  };

  const longName = params.name.length > 12;
  const displayedName = longName ? createShourtcut(params.name) : params.name;
  return (
    <div>
      <Tile>
        <div className="neonSkillCont">
          <Icon iconSize="xl">{params.icon}</Icon>
          <div className="skilltile-title tooltip">
            {longName && <span className="tooltip-text">{params.name}</span>}
            {displayedName}
            {longName && <span class="tooltip-icon">?</span>}
          </div>
          <div
            className="skilltile-stars-container"
            onClick={() => params.cb()}
          >
            {StarsLvl(params.lvl)}
          </div>
        </div>
      </Tile>
    </div>
  );
};

export { SkillTile };
