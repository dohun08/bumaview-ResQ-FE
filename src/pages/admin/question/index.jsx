import Space from "@/components/layout/space/index.jsx";
import QuestionForm from "@/containers/admin/form/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import { useLocation } from "react-router-dom";
import {useQuestionMutations} from "@/hooks/useQuestion";

export default function AdminQuestion() {
  const { handleNavigate } = useNavigationWithTransition();
  const { createQuestion, updateQuestion } = useQuestionMutations();
  const location = useLocation();

  const onCancel = () => {
    handleNavigate("/admin");
  };

  const onSubmit = async (data) => {
    try {
      if (location.pathname === "/admin/question/update") {
        await updateQuestion.mutateAsync({
          data: data
        });
      } else {
        await createQuestion.mutateAsync(data);
      }
      handleNavigate("/admin");
    } catch (error) {
      console.error("Error saving question:", error);
      alert("질문을 저장하는 중 오류가 발생했습니다.");
    }
  };

  return (
    <Space>
      <QuestionForm
        onCancel={onCancel}
        onSubmit={onSubmit}
        initialData={location.state}
      />
    </Space>
  );
}