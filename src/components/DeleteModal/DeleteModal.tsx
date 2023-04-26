import { ButtonS } from "..";
import { ButtonDiv, DeleteContainer } from "./DeleteModal.styles";

export const DeleteModal = () => {
  return (
    <DeleteContainer>
      <h2>Are you sure you want to delete this item?</h2>
      <ButtonDiv>
        <ButtonS
          border
          text="Cancel"
          onClick={(e) => console.log("edit")}
          bgColor="#fff"
          textColor="#000"
        />
        <ButtonS
          text="Delete"
          bgColor="#FF5151"
          onClick={(e) => console.log("edit")}
        />
      </ButtonDiv>
    </DeleteContainer>
  );
};
