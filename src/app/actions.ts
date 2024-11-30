"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const searchIdeaSchema = z.object({
  idea: z.string().min(1),
});

export async function searchIdeaAction(_: unknown, formData: FormData) {
  const incomingData = Object.fromEntries(formData);

  const { success, data, error } = searchIdeaSchema.safeParse(incomingData);

  if (!success) {
    return {
      success: false,
      error: {
        idea: error.formErrors.fieldErrors.idea,
      },
      data: incomingData,
    };
  }
  try {
    // send a post request to the api to get the message id and redirect to the proposal page with the message id
    console.log(data);
    const messageId = 1;
    redirect(`/proposal/${messageId}`);
  } catch (error) {
    console.log(error);
  }
}
