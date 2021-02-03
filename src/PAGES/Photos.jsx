import React, { useContext } from "react";
import { contextVariable } from "../ContextFile";
import "../App.css";
import Image from "../COMPONENTS/Image";

export default function Photos() {
  const { allphotos } = useContext(contextVariable);

  const variableHoldingMappedImages = allphotos.map((i) => <Image src={i} key={i.id} />);

  return (
    <div className="overallGalleryContainer">
      <h3>Pick and Buy images for your next project </h3>
      {variableHoldingMappedImages}
    </div>
  );
}
