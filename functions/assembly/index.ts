import { JSON } from "json-as";
import { model } from "@hypermode/functions-as";

const modelId = "msp-523a8138-76b3-406f-9386-c53aa9b23c44";

export function testClassifier(text: string): string {
  const results = model.classifyText(modelId, text);
  return JSON.stringify(results);
}
