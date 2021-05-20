import { Versions, Version } from "../types";

export const getVersion = () => {
  const queryParam = (window.location.search).split("?")[1];
  return Versions.includes(queryParam as Version) ? queryParam as Version : "vanilla";
};

export const getObjectOptions = (version: Version) => {
  const versionOptions = {
                            "earth": [ {object:"kite", text: "Kite"},
                                       {object:"soccer", text:"Soccer"},
                                       {object:"schoolbus", text:"School Bus"},
                                       {object:"worldTradeCtr", text:"One World Trade Center"}
                                      ],
                            "venus": [ {object:"flourBag", text:"Bag of Flour"},
                                       {object:"bowlingBall", text: "Bowling Ball"},
                                       {object:"backpack", text:"Backpack"}
                                      ],
                            "forces-unknown": [ {object:"bottle", text:"Water Bottle"},
                                                {object:"earth", text:"Earth"},
                                                {object:"paperClip", text: "Paper Clip"},
                                                {object:"human", text:"Human"},
                                                {object:"chair", text:"Chair"}
                                              ],
                            "vanilla": [ {object:"bottle", text:"Water Bottle"},
                                         {object:"earth", text:"Earth"},
                                         {object:"paperClip", text: "Paper Clip"},
                                         {object:"human", text:"Human"},
                                         {object:"chair", text:"Chair"}
                                        ]
                          };
  return versionOptions[version];
};
