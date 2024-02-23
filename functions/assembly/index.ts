import { JSON } from "json-as";
import { model } from "@hypermode/functions-as";

export function testClassifier(modelId: string, text: string): string {
  const results = model.classifyText(modelId, text);
  return JSON.stringify(results);
}
