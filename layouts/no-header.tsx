import { FunctionComponent } from "react";
type Props = {};

const NoHeader: FunctionComponent<Props> = (props) => {
  return (
    <div className="bg-gray-500">
      <div>wow{props.children}</div>
    </div>
  );
};

export default NoHeader;
