import Title from "../../../shared/Title/Title";
import BackIcon from "../../../assets/backIcon.svg";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./sameDateHeader.module.scss";

const SameDateHeader = () => {
  const { date, count } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const reverseDate = date?.split(".").reverse().join("-");
  return (
    <div className={styles.header}>
      <button onClick={handleGoBack} className={styles.backBtn}>
        <img src={BackIcon} alt="Back" />
        Go Back
      </button>
      <Title
        extraStyle={styles.text}
        context={`${reverseDate || ""}(${count})`}
      />
    </div>
  );
};

export default SameDateHeader;
