import { JSON } from "json-as";
import { inference } from "@hypermode/functions-as";

export function testClassifier(text: string): string {
  const modelName = "sentiment-classifier";
  const results = inference.computeClassificationLabels(modelName, text);
  return JSON.stringify(results);
}
