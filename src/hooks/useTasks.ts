import { useQuery, useQueryClient } from "@tanstack/react-query";
import { requestTasks } from "../api/requestTasks";
import { requestTaskUpload } from "../api/requestTaskUpload";

export const useTasks = () => {
  const queryClient = useQueryClient();

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => requestTasks(),
  });

  const makeTask = (inputValue: string) => {
    requestTaskUpload(inputValue);
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  };

  const deleteTask = async (id: string) => {
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  };

  return { tasks, isLoading, makeTask, deleteTask };
};
