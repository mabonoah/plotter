import "./Spinner.scss";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";
const override = css`
  margin: 0 auto;
  display: flex;
  align-self: center;
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
