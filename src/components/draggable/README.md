## DraggableList Component

The `DraggableList` component provides a flexible and customizable drag-and-drop list using `dnd-kit`. It allows you to pass in your data, customize the styling of list items, and define how each item should be rendered.

### Props

| Prop            | Type                            | Description                                                                                           |
| --------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `items`         | `T[]`                           | An array of items to be displayed in the list. Each item must have a unique `id` field.               |
| `onDragEnd`     | `(reorderedItems: T[]) => void` | Callback function that is called when the drag operation ends, providing the reordered list of items. |
| `renderItem`    | `(item: T) => React.ReactNode`  | Function to define how each item should be rendered.                                                  |
| `itemClassName` | `string`                        | Optional class name for custom styling of each sortable item.                                         |

### Usage

Integrate the `DraggableList` into your React application like so:

```jsx
import React, { useState } from 'react';
import DraggableList from './DraggableList';

function ExampleComponent() {
  const [lessons, setLessons] = useState([
    { id: 'lesson-1', title: 'Lesson 1' },
    { id: 'lesson-2', title: 'Lesson 2' },
    { id: 'lesson-3', title: 'Lesson 3' },
    { id: 'lesson-4', title: 'Lesson 4' },
  ]);

  const handleLessonsReorder = (newOrder) => {
    setLessons(newOrder);
  };

  return (
    <div>
      <h1>My Draggable Lessons</h1>
      <DraggableList
        items={lessons}
        onDragEnd={handleLessonsReorder}
        itemClassName="py-2 cursor-pointer" // Custom class styles for each list item
        renderItem={(item)=> <span>{item.title}</span>};
      />
    </div>
  );
}

export default ExampleComponent;
```
