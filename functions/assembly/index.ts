import { JSON } from "json-as";
import { model } from "@hypermode/functions-as";

export function testClassifier(text: string): string {
  const modelName = "sentiment-classifier";
  const results = model.classifyText(modelName, text);
  return JSON.stringify(results);
}
