import { Wrapper } from "./styles";

function CategoryBox({ children, onCategoryClick }) {
  return (
    <Wrapper onClick={() => onCategoryClick(children)}>
      <img
        className="category-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfr4l2qlM17zaqp3vFMAI7dkmC9Q5P9QvEPg&usqp=CAU"
        alt="category"
      />
      <h2 className="category-name">{children}</h2>
    </Wrapper>
  );
}

export default CategoryBox;
