import { Button, Input } from "../..";

import styles from "./editItem.module.scss";

interface EditItemType {
  onCancel: () => void;
  isVisible?: boolean;
  setIsVisible?: any;
  onChangeTitle: any;
  onHandleEdit: any;
  titleValue: string;
}

const EditItem: React.FC<EditItemType> = ({
  onCancel,
  isVisible,
  onChangeTitle,
  onHandleEdit,
  titleValue,
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
          extraStyle={styles.input}
          type="text"
        />
        <div className={styles.btnWrapper}>
          <Button
            onClick={onHandleEdit}
            extraStyle={styles.btn}
            context="Save"
          />
          <Button onClick={onCancel} extraStyle={styles.cancelBtn} context="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default EditItem;
