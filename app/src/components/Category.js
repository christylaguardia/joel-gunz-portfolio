import React from 'react';
import categories from '../data/category.json';

// export default class Category extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       categories: categories
//     };

//     this.toggleCategory = this.toggleCategory.bind();
//   }

//   toggleCategory() {

//   }

//   render() {

export default function Categories() {
  let toggleClass = 'toggle unchecked';

  return (
    <div>
      {categories.map((category, item) => {
        <label key={item} className={toggleClass}>
          <input
            type="checkbox"
            // checked={this.state.advertising}
            onChange={() => this.toggleCategory()} />
          {category.category}
        </label>;
      })}
    </div>
  );
}