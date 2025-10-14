import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addQuestion as createQuestionApi, updateQuestion as updateQuestionApi, deleteQuestion as deleteQuestionApi, searchQuestion } from "@/api/admin";

export function useQuestions(params) {

  return useQuery({
    queryKey: ['questions', params],
    queryFn: async () => {
      const data = await searchQuestion(
        params.company_id,
        params.year,
        params.category,
        params.page,
        params.size
      );
      return data;
    },
    keepPreviousData: true,
  });
}

export function useQuestionMutations() {
  const queryClient = useQueryClient();

  const createQuestion = useMutation({
    mutationFn: (data) => createQuestionApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
    },
  });

  const updateQuestion = useMutation({
    mutationFn: ({ data }) => updateQuestionApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
    },
  });

  const deleteQuestion = useMutation({
    mutationFn: (id) => deleteQuestionApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
    },
  });

  return { createQuestion, updateQuestion, deleteQuestion };
}