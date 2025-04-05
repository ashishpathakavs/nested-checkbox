import "./styles.css";
import data from "./data";
import CheckboxTree from "./CheckboxTree";
import { useState } from "react";
import { STATUS } from "./constant";

export default function App() {
  const [checkboxState, setCheckboxState] = useState(data);

  const computeStatus = (node) => {
    if (node.children.length === 0) {
      return;
    }
    let checkedCount = 0;
    let unCheckedCount = 0;

    node.children.map((child) => {
      if (child.status === STATUS.CHECKED) {
        checkedCount++;
      } else if (child.status === STATUS.UNCHECKED) {
        unCheckedCount++;
      }
    });

    if (checkedCount === node.children.length) {
      node.status = STATUS.CHECKED;
    } else if (unCheckedCount === node.children.length) {
      node.status = STATUS.UNCHECKED;
    } else {
      node.status = STATUS.INDETERMINATE;
    }
  };

  const traverse = (targetId, node, isDescendent, ancestorStatus) => {
    if (node.id === targetId) {
      if (node.status === STATUS.CHECKED) {
        node.status = STATUS.UNCHECKED;
      } else {
        node.status = STATUS.CHECKED;
      }
    }

    if (isDescendent === true) {
      node.status = ancestorStatus;
    }

    node.children.map((child) => {
      traverse(
        targetId,
        child,
        node.id === targetId || isDescendent,
        node.status
      );
    });

    //postorder
    computeStatus(node);
  };

  const handleChange = (id) => {
    const clonedCheckboxState = JSON.parse(JSON.stringify(checkboxState));

    clonedCheckboxState.map((rootNode) => {
      traverse(id, rootNode);
    });

    setCheckboxState(clonedCheckboxState);
  };
  return (
    <div className="App">
      <h1>Nested Checkbox</h1>
      <CheckboxTree data={checkboxState} handleChange={handleChange} />
    </div>
  );
}
