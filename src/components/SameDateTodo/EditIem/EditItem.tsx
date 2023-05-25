import { Button, Input } from "../..";

import styles from "./editImtem.module.scss"

interface EditItemType {
  onCancel: () => void;
  isVisible?: boolean;
  setIsVisible?: any;
  onChangeTitle: any;
  onChangeDate: any;
  onHandleEdit: any;
  titleValue: string;
  dateValue: string;
}

const EditItem: React.FC<EditItemType> = ({
  onCancel,
  isVisible,
  onChangeTitle,
  onChangeDate,
  onHandleEdit,
  titleValue,
  dateValue,
}) => {
  return (
    <div
      style={{ display: isVisible ? "block" : "none" }}
      className={styles.wrapper}
    >
      <div className={styles.inputPart}>
        <Input
          onChange={onChangeTitle}
          value={titleValue}
          extraStyle={styles.inpFirst}
          type="text"
        />
        <Input
          onChange={onChangeDate}
          value={dateValue}
          extraStyle={styles.inpSecond}
          type="date"
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button onClick={onHandleEdit} extraStyle={styles.btn} context="Save" />
        <Button onClick={onCancel} extraStyle={styles.btn} context="Cancel" />
      </div>
    </div>
  );
};

export default EditItem;
