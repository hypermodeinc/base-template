import { model, ClassificationResult } from "@hypermode/functions-as";

export function testClassifier(text: string): ClassificationResult {
  const modelName = "sentiment-classifier";
  return model.classifyText(modelName, text);
}
