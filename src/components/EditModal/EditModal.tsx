import { ButtonS, InputS } from "..";
import { ButtonDiv } from "../DeleteModal/DeleteModal.styles";
import { EditContainer } from "./EditModal.styles";

export const EditModal = () => {
  return (
    <EditContainer>
      <h2>Edit Item</h2>
      <InputS
        inputId={"Title"}
        onChange={function (val: string): void {
          throw new Error("Function not implemented.");
        }}
        pHolder={"Hello World"}
        text={"Title"}
      />
      <InputS
        inputId={"Content"}
        onChange={function (val: string): void {
          throw new Error("Function not implemented.");
        }}
        pHolder={"Content Here"}
        text={"Content"}
      />
      <ButtonDiv>
        <ButtonS
          border
          text="Cancel"
          onClick={(e) => console.log("edit")}
          bgColor="#fff"
          textColor="#000"
        />
        <ButtonS text="Save" onClick={(e) => console.log("edit")} />
      </ButtonDiv>
    </EditContainer>
  );
};
