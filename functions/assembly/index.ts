import { model, ClassificationResult } from "@hypermode/functions-as";

export function testClassifier(text: string): ClassificationResult {
  const modelId = "my_classifier";
  return model.classifyText(modelId, text);
}

export function getPeople(): Person[] {
  return [
    {
      name: "Alice",
      age: 30,
      favorites: [{ name: "roses" }, { name: "kittens" }],
    },
    {
      name: "Bob",
      age: 40,
      favorites: [{ name: "packages" }, { name: "string" }],
    },
  ];
}

export function getPerson(): Person {
  return getPeople()[0];
}

class Person {
  name!: string;
  age: i32 = 0;
  favorites: Thing[] = [];
}

class Thing {
  name!: string;
}
