import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clearMessage } from "../store/modalReducer";
type Props = {};

const ModalComponent: FunctionComponent<Props> = (props) => {
  const message = useSelector((state: RootState) => state.modal.message);
  const type = useSelector((state: RootState) => state.modal.type);
  const dispatch = useDispatch();

  if (!message) return <div></div>;
  if (!type) return <div></div>;

  return (
    <div
      className={`bg-white rounded-sm shadow-xl w-3/12 fixed bottom-4 right-4 border-[1px] ${
        type === "info" ? "border-green-400" : "border-red-600"
      } overflow-hidden z-10`}
    >
      <div className="flex justify-between items-center px-4">
        <div className="px-2 py-4">{message}</div>
        <div
          onClick={() => dispatch(clearMessage())}
          className="text-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div
        className={`absolute w-full h-1 bottom-0 ${
          type === "info" ? "bg-green-400" : "bg-red-600"
        }`}
      ></div>
    </div>
  );
};

export default ModalComponent;
