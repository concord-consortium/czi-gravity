import { Modes, Mode } from "../types";

export const getMode = () => {
  const queryParam = (window.location.search).split("?")[1];
  return Modes.includes(queryParam as Mode) ? queryParam as Mode : "vanilla";
};

export const getObjectOptions = (mode: Mode) => {
  const modeOptions = {
                            "earth": [ {object:"kite", text: "Kite"},
                                       {object:"soccer", text:"Soccer Ball"},
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
  return modeOptions[mode];
};
