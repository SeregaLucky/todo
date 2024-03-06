import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import itemsOperations from "../../../../redux/items/itemsOperations";

const MAX_TITLE_LENGTH = 30;

const schema = yup.object({
  title: yup
    .string()
    .required("Title can not be empty")
    .max(MAX_TITLE_LENGTH, `Max length: ${MAX_TITLE_LENGTH} symbols`)
    .default(""),
});

export const useFormTodo = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const onSubmit = async ({ title }) => {
    const titleTrim = title.trim();
    if (titleTrim.length === 0) return;

    await dispatch(itemsOperations.addItem(titleTrim));
    reset({ title: "" });
    setFocus("title");
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    error: errors.title,
  };
};
