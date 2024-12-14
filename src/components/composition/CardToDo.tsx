import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

interface TodoCardProps {
  title: string;
  description: string;
  headerColor: string;
  tasks: Todo[];
  onTaskToggle: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onAddTask?: (taskText: string) => void;
  onErase: () => void;
  isEditable?: boolean;
  onUpdateTask?: (id: string, newDesc: string) => void;
}

export function TodoCard({
  title,
  description,
  headerColor,
  tasks,
  onTaskToggle,
  onDeleteTask,
  onAddTask,
  onErase,
  isEditable = false,
  onUpdateTask,
}: TodoCardProps) {
  const [newTaskText, setNewTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  const handleAddTask = () => {
    if (onAddTask && newTaskText.trim()) {
      onAddTask(newTaskText.trim());
      setNewTaskText("");
    }
  };

  const handleEditStart = (task: Todo) => {
    if (!task.completed) {
      setEditingTaskId(task.id);
      setEditingTaskText(task.desc);
    }
  };

  const handleEditSave = (taskId: string) => {
    if (onUpdateTask && editingTaskText.trim()) {
      onUpdateTask(taskId, editingTaskText.trim());
      setEditingTaskId(null);
      setEditingTaskText("");
    }
  };

  return (
    <Card className="flex-1">
      <div className={`h-2 rounded-t-lg ${headerColor}`} />

      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {isEditable && (
          <div className="flex items-center gap-2">
            <Input
              placeholder="Add a new task"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            />
            <Button onClick={handleAddTask} size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-2 group relative pr-8"
          >
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => onTaskToggle(task.id)}
            />
            {editingTaskId === task.id ? (
              <Input
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleEditSave(task.id)}
                onBlur={() => setEditingTaskId(null)}
              />
            ) : (
              <span
                className={`flex-1 cursor-pointer ${
                  task.completed ? "text-gray-500 line-through" : ""
                }`}
                onClick={() => handleEditStart(task)}
              >
                {task.desc}
              </span>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onDeleteTask(task.id)}
            >
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={onErase}
          disabled={tasks.length === 0}
        >
          {tasks.length > 0 ? "Erase All" : "Nothing to Erase"}
        </Button>
      </CardFooter>
    </Card>
  );
}
