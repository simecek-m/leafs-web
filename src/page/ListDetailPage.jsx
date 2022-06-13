import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlexibleContent from "component/layout/FlexibleContent";
import { useTodoApi } from "hooks/api";
import { useKeyPress } from "hooks/interaction";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

export default function ListDetailPage() {
  let { id } = useParams();
  const { deleteTodo } = useTodoApi();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useMutation(deleteTodo, {
    onSuccess: () => {
      navigate("..");
      queryClient.invalidateQueries("todos");
    },
    onError: (response) => {
      toast.error(
        <div>
          {response.statusText} (status: {response.status})
        </div>
      );
    },
  });

  const navigateUp = () => navigate("..");
  const { addOnKeyDownEvent, removeOnKeyDownEvent } = useKeyPress(
    "Escape",
    navigateUp
  );

  useEffect(() => {
    addOnKeyDownEvent();
    return () => {
      removeOnKeyDownEvent();
    };
  }, [addOnKeyDownEvent, removeOnKeyDownEvent]);

  return (
    <FlexibleContent>
      <h1>List Detail Page - {id}</h1>
      <FontAwesomeIcon icon="trash" onClick={() => mutate(id)} />
    </FlexibleContent>
  );
}
