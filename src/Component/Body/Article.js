import React from "react";
import { Card, Image } from "semantic-ui-react";

const items = [
  {
    header: "Project Report - April",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    meta: "ROI: 30%"
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%"
  },
  {
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
    src:"https://cdn-images-1.medium.com/focal/832/302/47/60/1*hjnZmMS2URkaXm52z8J5EQ.png"
  }
];



const Article = () => (
 <div>
      <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" fluid/>
 </div>
);

export default Article;
