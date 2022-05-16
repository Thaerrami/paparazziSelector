import React, { useState } from "react";
import PaparazziSelector from "./selectorComponents/PaparazziSelector";

function PaparazziSelectorComponent(props) {
  const { posibleValues } = props;
  const [getValue, setGetValue] = useState(4288); //default
  var ids = [4288, 4291, 4284, 4287, 4289, 4286, 4292, 4283, 4290];
  var squarSize = 300;
  return (
    <div>
      {/* center - left - right - front - rear - RightRear -leftrear - FrontRight - FrontLeft   */}
      <PaparazziSelector
        ids={ids}
        setGetValue={setGetValue}
        initValue={getValue}
        width={squarSize}
        height={squarSize}
      />
    </div>
  );
}

export default PaparazziSelectorComponent;
