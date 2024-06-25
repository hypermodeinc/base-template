import { models } from "@hypermode/functions-as";
import { ClassificationModel } from "@hypermode/models-as/models/experimental/classification";

const modelName = "sentiment-classifier";
const threshold: f32 = 0.5;

export function testClassifier(text: string): string {
  const model = models.getModel<ClassificationModel>(modelName);
  const input = model.createInput([text]);
  const output = model.invoke(input);

  const prediction = output.predictions[0];
  if (prediction.confidence >= threshold) {
    return prediction.label;
  }

  return "";
}
