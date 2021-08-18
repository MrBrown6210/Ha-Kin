import { FunctionComponent } from "react";
type Props = {};

const NoHeader: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default NoHeader;
