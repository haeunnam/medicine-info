import { Wrapper } from "./styles";

function CategoryBox({ children, onCategoryClick }) {
  return (
    <Wrapper onClick={() => onCategoryClick(children)}>
      <img
        className="category-img"
        src={require(`../../../assets/images/category/${children}.png`).default}
        alt="category"
      />
      <h2 className="category-name">{children}</h2>
    </Wrapper>
  );
}

export default CategoryBox;
