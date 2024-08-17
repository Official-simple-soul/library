import React from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Define the types for the props
interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

interface DraggableListProps<T> {
  items: T[];
  onDragEnd: (reorderedItems: T[]) => void;
  renderItem: (item: T) => React.ReactNode;
  itemClassName?: string;
}

// SortableItem component with TypeScript
const SortableItem: React.FC<SortableItemProps> = ({
  id,
  children,
  className,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={className}
    >
      {children}
    </div>
  );
};

// DraggableList component with TypeScript
const DraggableList = <T extends { id: string }>({
  items,
  onDragEnd,
  renderItem,
  itemClassName,
}: DraggableListProps<T>) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      const reorderedItems = arrayMove(items, oldIndex, newIndex);
      onDragEnd(reorderedItems);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="p-4 list-decimal">
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} className={itemClassName}>
              {renderItem(item)}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableList;
