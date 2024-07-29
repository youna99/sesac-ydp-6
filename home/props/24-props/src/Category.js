const Category = (props) => {
  console.log("Category props >>>", props);
  // {children: Array(3)}
  // children: Array(3)
  // 0: {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …}
  // 1: {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …}
  // 2: {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …}
  return <ul>{props.children}</ul>;
};

export default Category;
