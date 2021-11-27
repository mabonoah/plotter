import "./Spinner.scss";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";
const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
`;

function Spinner({ loading }) {
  return (
    <>
      {loading && <div className="overlay"></div>}
      <ScaleLoader
        color="#24292f"
        loading={loading}
        css={override}
        size={150}
      />
    </>
  );
}

export default Spinner;
