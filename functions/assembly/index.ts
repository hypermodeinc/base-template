import { models } from "@hypermode/functions-as";
import {
  OpenAIChatModel,
  SystemMessage,
  UserMessage,
} from "@hypermode/models-as/models/openai/chat";

export function generateText(text: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator");

  const input = model.createInput([
    new SystemMessage("You are a helpful assistant."),
    new UserMessage(text),
  ]);

  const output = model.invoke(input);

  return output.choices[0].message.content.trim();
}
