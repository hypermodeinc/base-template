import { models } from "@hypermode/functions-as";
import {
  OpenAIChatModel,
  SystemMessage,
  UserMessage,
} from "@hypermode/models-as/models/openai/chat";
const modelName = "text-generator";

export function generateText(text: string): string {
  const model = models.getModel<OpenAIChatModel>(modelName);

  const input = model.createInput([
    new SystemMessage(
      "You are a helpful assistant. Limit your answers to 150 words.",
    ),
    new UserMessage(text),
  ]);

  input.temperature = 0.7;
  input.maxTokens = 200;

  const output = model.invoke(input);

  return output.choices[0].message.content.trim();
}
